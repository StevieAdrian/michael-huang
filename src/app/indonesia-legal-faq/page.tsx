import type { Metadata } from "next";
import { FaqClientPage } from "./faq-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { legalFaqs } from "../constants/faqs";

export const metadata: Metadata = {
  title: "FAQ Hukum Indonesia | Notaris, Pendirian PT/CV, PPAT & Konsultasi Bisnis",
  description:
    "Temukan jawaban atas pertanyaan hukum Indonesia: cara pendirian PT/CV/PMA, prosedur notaris & PPAT, akta jual beli properti, HAKI, izin usaha OSS, hingga konsultasi hukum bisnis.",
  keywords: [
    "faq hukum indonesia",
    "pertanyaan hukum notaris",
    "cara pendirian pt indonesia",
    "prosedur ppat jakarta",
    "konsultasi hukum bisnis jakarta",
    "hukum bisnis indonesia",
    "pendirian cv jakarta",
    "izin usaha oss indonesia",
  ],
  openGraph: generateOGMetadata(
    "FAQ Hukum Indonesia | Notaris, Pendirian PT/CV, PPAT & Konsultasi Bisnis",
    "Temukan jawaban atas pertanyaan hukum Indonesia: cara pendirian PT/CV/PMA, prosedur notaris & PPAT, akta jual beli properti, HAKI, izin usaha OSS, hingga konsultasi hukum bisnis.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/indonesia-legal-faq`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/indonesia-legal-faq`,
  },
};

export default function IndonesiaLegalFaqPage() {
  const schema = generateFAQSchema(
    legalFaqs,
    `${seoConfig.siteUrl}/indonesia-legal-faq`
  );

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "FAQ", url: "https://www.michaelhuang.id/indonesia-legal-faq" }])} />
      <FaqClientPage />
    </>
  );
}
