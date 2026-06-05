import type { Metadata } from "next";
import { LawFirmClientPage } from "./law-firm-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Law Firm Jakarta | Pengacara Korporasi & Litigasi | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
  description:
    "Law firm profesional di Jakarta. Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D. menangani hukum korporasi, litigasi perdata & komersial, merger & akuisisi (M&A), hukum properti, dan hukum keluarga. Konsultasi hukum terpercaya.",
  keywords: [
    "law firm jakarta",
    "pengacara jakarta",
    "pengacara korporasi jakarta",
    "litigasi perdata jakarta",
    "konsultasi hukum jakarta",
    "pengacara bisnis jakarta",
    "firma hukum jakarta barat",
    "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D. pengacara",
    "hukum korporasi jakarta",
  ],
  openGraph: generateOGMetadata(
    "Law Firm Jakarta | Pengacara Korporasi & Litigasi | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
    "Law firm profesional di Jakarta. Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D. menangani hukum korporasi, litigasi perdata & komersial, merger & akuisisi (M&A), hukum properti, dan hukum keluarga. Konsultasi hukum terpercaya.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/law-firm-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/law-firm-michael`,
  },
};

export default function LawFirmPage() {
  const schema = generateLegalServiceSchema({
    name: "Law Firm Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
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
