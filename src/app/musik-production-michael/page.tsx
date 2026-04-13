import type { Metadata } from "next";
import { MusicClientPage } from "./music-client";
import { seoConfig, generateOGMetadata } from "@/config/seo-config";
import { generateMusicGroupSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Glory Worship & Musik | Michael Huang",
  description:
    "Layanan aransemen musik, worship leading, and produksi rekaman profesional. Dedikasi untuk karya musik yang memberkati dan menginspirasi.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/musik-production-michael`,
  },
  openGraph: generateOGMetadata(
    "Glory Worship & Musik | Michael Huang",
    "Layanan aransemen musik, worship leading, dan produksi rekaman profesional. Dedikasi untuk karya musik berkualitas.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/musik-production-michael`
  ),
};

export default function MusicPage() {
  return (
    <>
      <StructuredData data={generateMusicGroupSchema()} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Musik Production", url: "https://www.michaelhuang.id/musik-production-michael" }])} />
      <MusicClientPage />
    </>
  );
}
