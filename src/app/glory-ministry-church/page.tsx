import type { Metadata } from "next";
import { ChurchClientPage } from "./church-client";
import { fetchLiveTitheData } from "@/app/utils/fetchTithe";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateChurchSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Glory Ministry Church Jakarta | Gereja Kristen & Ibadah Mingguan",
  description:
    "Glory Ministry Church — gereja Kristen di Jakarta dengan ibadah mingguan, program pemuridan, dan komunitas iman yang hangat. Temukan jadwal ibadah, lokasi, dan kegiatan rohani komunitas Kristen Jakarta.",
  keywords: [
    "glory ministry church",
    "gereja kristen jakarta",
    "gereja jakarta",
    "ibadah minggu jakarta",
    "komunitas kristen jakarta",
    "gereja glory ministry",
    "gereja cengkareng",
    "jadwal ibadah gereja jakarta",
  ],
  openGraph: generateOGMetadata(
    "Glory Ministry Church Jakarta | Gereja Kristen & Ibadah Mingguan",
    "Glory Ministry Church - gereja Kristen di Jakarta dengan ibadah mingguan, program pemuridan, dan komunitas iman yang hangat. Temukan jadwal ibadah, lokasi, dan kegiatan rohani komunitas Kristen Jakarta.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/glory-ministry-church`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/glory-ministry-church`,
  },
};

export default async function ChurchPage() {
  const initialTitheData = await fetchLiveTitheData();
  return (
    <>
      <StructuredData data={generateChurchSchema()} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Gereja Glory Ministry", url: "https://www.michaelhuang.id/glory-ministry-church" }])} />
      <ChurchClientPage initialTitheData={initialTitheData} />
    </>
  );
}
