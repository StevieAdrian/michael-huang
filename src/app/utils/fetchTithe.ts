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
      const res = await fetch(url, {
        next: { revalidate: 60 } // Cache for 60 seconds
      });
      
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
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const columns = parseCSVLine(line);
    
    // Header check
    if (columns[0] && columns[0].toUpperCase() === "BULAN:") {
      month = columns[1] || "Unknown";
      
      // Find total jumlah
      const totalIndex = columns.findIndex(col => col.toUpperCase() === "TOTAL JUMLAH");
      if (totalIndex !== -1 && totalIndex + 1 < columns.length) {
        total = parseRupiahStr(columns[totalIndex + 1]);
      }
      continue;
    }
    
    // Start of columns
    if (columns[0] && columns[0].toUpperCase() === "NO.") {
      isParsingRows = true;
      continue;
    }
    
    if (isParsingRows) {
      const idStr = columns[0];
      const date = columns[1];
      const name = columns[2];
      const paymentType = columns[3];
      const amountStr = columns[4];
      
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
