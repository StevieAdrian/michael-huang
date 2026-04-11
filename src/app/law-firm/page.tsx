import type { Metadata } from "next";
import { LawFirmClientPage } from "./law-firm-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Law Firm | Michael Huang",
  description:
    "Protecting your interests with uncompromising excellence and strategic precision.",
  openGraph: generateOGMetadata(
    "Law Firm | Michael Huang",
    "Protecting your interests with uncompromising excellence and strategic precision.",
    `${seoConfig.siteUrl}/images/law-firm-og.png`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/law-firm`,
  },
};

export default function LawFirmPage() {
  const schema = generateLegalServiceSchema({
    name: "Law Firm Michael Huang",
    description: "Professional legal firm specializing in corporate and litigations.",
    url: `${seoConfig.siteUrl}/law-firm`,
  });

  return (
    <>
      <StructuredData data={schema} />
      <LawFirmClientPage />
    </>
  );
}
