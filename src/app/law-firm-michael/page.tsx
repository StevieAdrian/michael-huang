import type { Metadata } from "next";
import { LawFirmClientPage } from "./law-firm-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Law Firm Jakarta | Pengacara Korporasi & Litigasi | Michael Huang, S.H., M.Kn.",
  description:
    "Law firm profesional di Jakarta. Michael Huang, S.H., S.T., M.Kn. menangani hukum korporasi, litigasi perdata & komersial, merger & akuisisi (M&A), hukum properti, dan hukum keluarga. Konsultasi hukum terpercaya.",
  keywords: [
    "law firm jakarta",
    "pengacara jakarta",
    "pengacara korporasi jakarta",
    "litigasi perdata jakarta",
    "konsultasi hukum jakarta",
    "pengacara bisnis jakarta",
    "firma hukum jakarta barat",
    "Michael Huang pengacara",
    "hukum korporasi jakarta",
  ],
  openGraph: generateOGMetadata(
    "Law Firm Jakarta | Pengacara Korporasi & Litigasi | Michael Huang, S.H., M.Kn.",
    "Law firm profesional di Jakarta. Michael Huang, S.H., S.T., M.Kn. menangani hukum korporasi, litigasi perdata & komersial, merger & akuisisi (M&A), hukum properti, dan hukum keluarga. Konsultasi hukum terpercaya.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/law-firm-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/law-firm-michael`,
  },
};

export default function LawFirmPage() {
  const schema = generateLegalServiceSchema({
    name: "Law Firm Michael Huang",
    description: "Professional legal firm specializing in corporate and litigations.",
    url: `${seoConfig.siteUrl}/law-firm-michael`,
  });

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Law Firm", url: "https://www.michaelhuang.id/law-firm-michael" }])} />
      <LawFirmClientPage />
    </>
  );
}
