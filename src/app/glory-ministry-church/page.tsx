import type { Metadata } from "next";
import { ChurchClientPage } from "./church-client";
import { fetchLiveTitheData } from "@/app/utils/fetchTithe";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateChurchSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Gereja | Michael Huang",
  description:
    "Komunitas iman yang penuh kasih, harapan, dan sukacita dengan jadwal ibadah serta kegiatan mingguan.",
  openGraph: generateOGMetadata(
    "Gereja | Michael Huang",
    "Komunitas iman yang penuh kasih, harapan, dan sukacita dengan jadwal ibadah serta kegiatan mingguan.",
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
