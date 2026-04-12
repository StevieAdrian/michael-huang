import type { Metadata } from "next";
import { ChurchClientPage } from "./church-client";
import { fetchLiveTitheData } from "@/app/utils/fetchTithe";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateChurchSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Gereja | Michael Huang",
  description:
    "Komunitas iman yang penuh kasih, harapan, dan sukacita dengan jadwal ibadah serta kegiatan mingguan.",
  openGraph: generateOGMetadata(
    "Gereja | Michael Huang",
    "Komunitas iman yang penuh kasih, harapan, dan sukacita dengan jadwal ibadah serta kegiatan mingguan.",
    `${seoConfig.siteUrl}/images/church-og.png`
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
      <ChurchClientPage initialTitheData={initialTitheData} />
    </>
  );
}
