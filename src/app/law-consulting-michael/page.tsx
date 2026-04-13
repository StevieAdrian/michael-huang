import type { Metadata } from "next";
import { LawConsultingClientPage } from "./law-consulting-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema, generateFAQSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { lawConsultingFaqs } from "@/app/constants/law-consulting";

export const metadata: Metadata = {
  title: "Konsultasi Hukum | Michael Huang",
  description:
    "Advisory hukum strategis untuk melindungi, menstrukturisasi, dan mengakselerasi pertumbuhan bisnis Anda.",
  openGraph: generateOGMetadata(
    "Konsultasi Hukum | Michael Huang",
    "Advisory hukum strategis untuk melindungi, menstrukturisasi, dan mengakselerasi pertumbuhan bisnis Anda.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/law-consulting-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/law-consulting-michael`,
  },
};

export default function LawConsultingPage() {
  const serviceSchema = generateLegalServiceSchema({
    name: "Michael Huang Law Consulting",
    description: "Strategic legal advisory for businesses.",
    url: `${seoConfig.siteUrl}/law-consulting-michael`,
  });

  const faqSchema = generateFAQSchema(lawConsultingFaqs);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Law Consulting", url: "https://www.michaelhuang.id/law-consulting-michael" }])} />
      <StructuredData data={faqSchema} />
      <LawConsultingClientPage />
    </>
  );
}
