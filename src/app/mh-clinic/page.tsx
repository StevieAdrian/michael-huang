import type { Metadata } from "next";
import { ClinicClientPage } from "./clinic-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateClinicSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { clinicFaqs } from "@/app/constants/clinic";

export const metadata: Metadata = {
  title: "MH Clinic | Klinik Kecantikan Premium Jakarta Barat | Dr. Michael",
  description:
    "MH Clinic - Klinik Kecantikan & Estetika Premium dari Dr. Michael di Cengkareng, Jakarta Barat. Menghadirkan perawatan kulit, laser rejuvenation, anti-aging & facial glow. Opening Soon!",
  keywords: [
    "MH Clinic",
    "MH Clinic kecantikan",
    "klinik kecantikan jakarta barat",
    "klinik estetika jakarta barat",
    "klinik kecantikan cengkareng",
    "klinik kecantikan taman palem",
    "perawatan wajah jakarta barat",
    "laser rejuvenation jakarta barat",
    "anti aging jakarta barat",
    "facial glow jakarta barat",
    "klinik kecantikan dr michael",
  ],
  openGraph: generateOGMetadata(
    "MH Clinic | Klinik Kecantikan Premium Jakarta Barat | Dr. Michael",
    "MH Clinic - Klinik Kecantikan & Estetika Premium dari Dr. Michael di Cengkareng, Jakarta Barat. Menghadirkan perawatan kulit, laser rejuvenation, anti-aging & facial glow. Opening Soon!",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/mh-clinic`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/mh-clinic`,
  },
};

export default function ClinicPage() {
  const schema = generateClinicSchema();
  const faqSchema = generateFAQSchema(
    clinicFaqs,
    `${seoConfig.siteUrl}/mh-clinic`
  );

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={generateBreadcrumbSchema([
        { name: "Beranda", url: "https://www.michaelhuang.id/" },
        { name: "MH Clinic", url: "https://www.michaelhuang.id/mh-clinic" }
      ])} />
      <ClinicClientPage />
    </>
  );
}
