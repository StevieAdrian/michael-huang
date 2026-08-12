const BULAN: Record<string, string> = {
  Januari: "01",
  Februari: "02",
  Maret: "03",
  April: "04",
  Mei: "05",
  Juni: "06",
  Juli: "07",
  Agustus: "08",
  September: "09",
  Oktober: "10",
  November: "11",
  Desember: "12",
};


export function parseIndoDate(input: string): Date {
  const [day, month, year] = input.trim().split(/\s+/);
  const bulan = BULAN[month];

  if (!bulan || !day || !year) return new Date(0);

  const parsed = new Date(`${year}-${bulan}-${day.padStart(2, "0")}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

export function latestDate(articles: Array<{ date: string }>): Date {
  return articles.reduce<Date>((max, article) => {
    const current = parseIndoDate(article.date);
    return current > max ? current : max;
  }, new Date(0));
}
