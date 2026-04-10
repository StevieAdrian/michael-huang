import type { Metadata } from "next";
import { PPATClientPage } from "./ppat-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "PPAT | Michael Huang",
  description:
    "Layanan pembuatan akta tanah yang legal, akurat, dan terdaftar resmi di Badan Pertanahan Nasional (BPN).",
  openGraph: generateOGMetadata(
    "PPAT | Michael Huang",
    "Layanan pembuatan akta tanah yang legal, akurat, dan terdaftar resmi di Badan Pertanahan Nasional (BPN).",
    `${seoConfig.siteUrl}/images/ppat-og.png`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/ppat`,
  },
};

export default function PPATPage() {
  const schema = generateLegalServiceSchema({
    name: "PPAT Michael Huang",
    description: "Layanan Pejabat Pembuat Akta Tanah resmi Jakarta Barat.",
    url: `${seoConfig.siteUrl}/ppat`,
  });

  return (
    <>
      <StructuredData data={schema} />
      <PPATClientPage />
    </>
  );
}
