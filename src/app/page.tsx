import type { Metadata } from "next";
import HomePage from "@/features/home/page";
import { generatePersonSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  alternates: {
    canonical: seoConfig.siteUrl,
  },
};

export default function Page() {
  return (
    <>
      <StructuredData data={generatePersonSchema()} />
      <HomePage />
    </>
  );
}