import { ChurchTitheMonth, ChurchTitheRow } from "@/app/constants/church";

const SHEET_GIDS = [
  "1988151645", // Tab 1
  "1852066128", // Tab 2
  "569630883",  // Tab 3
  "337286366",  // Tab 4
  "0"           // Tab 5
];

export async function fetchLiveTitheData(): Promise<ChurchTitheMonth[]> {
  try {
    const fetchPromises = SHEET_GIDS.map(async (gid) => {
      const url = `https://docs.google.com/spreadsheets/d/1uBBirkqnagjrPbek7apzioWaeEHyDAFmc8EbQcO1j3E/export?format=csv&gid=${gid}`;

      // Abort fetch after 5 seconds to prevent hanging renders during Googlebot crawls
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      let res: Response;
      try {
        res = await fetch(url, {
          signal: controller.signal,
          next: { revalidate: 3600 }, // Cache for 1 hour — reduces live-fetch exposure during crawls
        });
      } catch (fetchErr) {
        console.error(`Fetch aborted or failed for gid ${gid}:`, fetchErr);
        return null;
      } finally {
        clearTimeout(timeout);
      }

      if (!res.ok) {
        console.error(`Failed to fetch spreadsheet gid ${gid}`, res.status);
        return null;
      }

      const text = await res.text();
      return parseTitheCSV(text);
    });

    const results = await Promise.all(fetchPromises);

    // Filter out nulls and empty data
    const validMonths = results.filter((r): r is ChurchTitheMonth => r !== null);
    return validMonths;
  } catch (error) {
    console.error("Error fetching live tithe data:", error);
    return [];
  }
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result.map(s => s.trim());
}

function parseTitheCSV(csv: string): ChurchTitheMonth | null {
  const lines = csv.split('\n').map(line => line.replace(/\r/g, ''));
  if (lines.length === 0) return null;

  let month = "Unknown";
  let total = 0;
  const rows: ChurchTitheRow[] = [];
  
  let isParsingRows = false;
  let noColumnIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const columns = parseCSVLine(line);
    
    // Header check
    const bulanIndex = columns.findIndex(col => col && col.toUpperCase() === "BULAN:");
    if (bulanIndex !== -1) {
      month = columns[bulanIndex + 1] || "Unknown";
      
      // Find total jumlah
      const totalIndex = columns.findIndex(col => col && col.toUpperCase() === "TOTAL JUMLAH");
      if (totalIndex !== -1 && totalIndex + 1 < columns.length) {
        total = parseRupiahStr(columns[totalIndex + 1]);
      }
      continue;
    }
    
    // Start of columns
    const noIndex = columns.findIndex(col => col && col.toUpperCase() === "NO.");
    if (noIndex !== -1) {
      isParsingRows = true;
      noColumnIndex = noIndex;
      continue;
    }
    
    if (isParsingRows && noColumnIndex !== -1) {
      const idStr = columns[noColumnIndex];
      const date = columns[noColumnIndex + 1];
      const name = columns[noColumnIndex + 2];
      const paymentType = columns[noColumnIndex + 3];
      const amountStr = columns[noColumnIndex + 4];
      
      // If no valid ID, we've hit the end of the populated rows 
      if (!idStr || idStr.trim() === "") {
         continue; 
      }
      
      // If we have an ID but empty fields, ignore or add them carefully
      if (name) {
        rows.push({
           date: date || "",
           name: name || "NN",
           paymentType: paymentType || "TF",
           amount: parseRupiahStr(amountStr || "0")
        });
      }
    }
  }
  
  if (month === "Unknown" && rows.length === 0) {
    return null; // Empty or invalid data
  }
  
  return {
    month: month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(), // e.g. "April"
    year: new Date().getFullYear(),
    total: total,
    rows
  };
}

function parseRupiahStr(str: string): number {
  if (!str) return 0;
  // Remove "Rp", ".", ",", and spaces
  const clean = str.replace(/Rp|\.|,| /gi, '');
  return parseInt(clean, 10) || 0;
}
