import type { Metadata } from "next";
import { FaqClientPage } from "./faq-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { legalFaqs } from "../constants/faqs";

export const metadata: Metadata = {
  title: "Indonesia Legal FAQ | Michael Huang",
  description:
    "Pertanyaan yang sering diajukan mengenai layanan hukum, notaris, pendirian PT/CV, HAKI, hingga konsultasi bisnis di Indonesia.",
  openGraph: generateOGMetadata(
    "Indonesia Legal FAQ | Michael Huang",
    "Pertanyaan yang sering diajukan mengenai layanan hukum, notaris, pendirian PT/CV, HAKI, hingga konsultasi bisnis di Indonesia.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/indonesia-legal-faq`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/indonesia-legal-faq`,
  },
};

export default function IndonesiaLegalFaqPage() {
  const schema = generateFAQSchema(legalFaqs);

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "FAQ", url: "https://www.michaelhuang.id/indonesia-legal-faq" }])} />
      <FaqClientPage />
    </>
  );
}
