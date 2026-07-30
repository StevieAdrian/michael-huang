import type { Metadata } from "next";
import { NotarisClientPage } from "./notaris-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { notarisFaqs } from "@/app/constants/notaris";

export const metadata: Metadata = {
  title: "Notaris Jakarta Barat | Akta Autentik & PPAT Resmi | Dr. Michael, S.H., S.T., M.Kn.",
  description:
    "Kantor Notaris & PPAT resmi di Jakarta Barat (Cengkareng / Taman Palem). Melayani Akta Autentik, Pendirian PT/CV, AJB Properti & Legalisasi. Hubungi kami!",
  keywords: [
    "notaris jakarta barat",
    "kantor notaris jakarta barat",
    "notaris cengkareng",
    "notaris taman palem",
    "notaris terdekat jakarta barat",
    "jasa notaris jakarta barat",
    "notaris pendirian pt jakarta barat",
    "notaris ppat jakarta barat",
    "akta autentik jakarta barat",
    "biaya notaris jakarta barat",
    "Dr. Michael, S.H., S.T., M.Kn. notaris",
  ],
  openGraph: generateOGMetadata(
    "Notaris Jakarta Barat | Akta Autentik & PPAT Resmi | Dr. Michael, S.H., S.T., M.Kn.",
    "Kantor Notaris & PPAT resmi di Jakarta Barat (Cengkareng / Taman Palem). Melayani Akta Autentik, Pendirian PT/CV, AJB Properti & Legalisasi. Hubungi kami!",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/notaris-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/notaris-michael`,
  },
};

export default function NotarisPage() {
  const schema = generateLegalServiceSchema({
    name: "Notaris Jakarta Barat - Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
    description: "Jasa Notaris resmi di Jakarta Barat. Melayani akta autentik, pendirian PT/CV/PMA, akta jual beli properti, waris & hibah, dan legalisasi dokumen. Terdaftar di Kemenkumham RI dan Ikatan Notaris Indonesia (INI).",
    url: `${seoConfig.siteUrl}/notaris-michael`,
  });

  const faqSchema = generateFAQSchema(notarisFaqs);

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Notaris", url: "https://www.michaelhuang.id/notaris-michael" }])} />
      <NotarisClientPage />
    </>
  );
}
