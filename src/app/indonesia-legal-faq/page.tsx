import type { Metadata } from "next";
import { FaqClientPage } from "./faq-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateFAQSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { legalFaqs } from "../constants/faqs";

export const metadata: Metadata = {
  title: "Indonesia Legal FAQ | Michael Huang",
  description:
    "Pertanyaan yang sering diajukan mengenai layanan hukum, notaris, pendirian PT/CV, HAKI, hingga konsultasi bisnis di Indonesia.",
  openGraph: generateOGMetadata(
    "Indonesia Legal FAQ | Michael Huang",
    "Pertanyaan yang sering diajukan mengenai layanan hukum, notaris, pendirian PT/CV, HAKI, hingga konsultasi bisnis di Indonesia.",
    `${seoConfig.siteUrl}/images/faq-og.png` // Optional: assume standard OG image or replace
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
      <FaqClientPage />
    </>
  );
}
