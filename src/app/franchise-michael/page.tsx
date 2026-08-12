import type { Metadata } from "next";
import { FranchiseClientPage } from "./franchise-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateFAQSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { franchiseFaqs } from "@/app/constants/franchise";

export const metadata: Metadata = {
  title: "Franchise Warteg Gemini - Peluang Kemitraan Bisnis | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
  description:
    "Peluang kemitraan bisnis restoran warteg premium dan model bisnis potensial lainnya dengan sistem teruji.",
  openGraph: generateOGMetadata(
    "Franchise Bisnis | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
    "Peluang kemitraan bisnis restoran warteg premium dan model bisnis potensial lainnya dengan sistem teruji.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/franchise-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/franchise-michael`,
  },
};

export default function FranchisePage() {
  const faqSchema = generateFAQSchema(
    franchiseFaqs,
    `${seoConfig.siteUrl}/franchise-michael`
  );

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Franchise", url: "https://www.michaelhuang.id/franchise-michael" }])} />
      <FranchiseClientPage />
    </>
  );
}
