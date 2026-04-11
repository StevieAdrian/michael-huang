import type { Metadata } from "next";
import { LawConsultingClientPage } from "./law-consulting-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema, generateFAQSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { lawConsultingFaqs } from "@/app/constants/law-consulting";

export const metadata: Metadata = {
  title: "Konsultasi Hukum | Michael Huang",
  description:
    "Advisory hukum strategis untuk melindungi, menstrukturisasi, dan mengakselerasi pertumbuhan bisnis Anda.",
  openGraph: generateOGMetadata(
    "Konsultasi Hukum | Michael Huang",
    "Advisory hukum strategis untuk melindungi, menstrukturisasi, dan mengakselerasi pertumbuhan bisnis Anda.",
    `${seoConfig.siteUrl}/images/consulting-og.png`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/law-consulting`,
  },
};

export default function LawConsultingPage() {
  const serviceSchema = generateLegalServiceSchema({
    name: "Michael Huang Law Consulting",
    description: "Strategic legal advisory for businesses.",
    url: `${seoConfig.siteUrl}/law-consulting`,
  });

  const faqSchema = generateFAQSchema(lawConsultingFaqs);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <LawConsultingClientPage />
    </>
  );
}
