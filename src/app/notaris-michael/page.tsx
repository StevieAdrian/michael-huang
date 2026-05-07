import type { Metadata } from "next";
import { NotarisClientPage } from "./notaris-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Notaris Jakarta Barat | Akta Autentik Resmi | Michael Huang, S.H., M.Kn.",
  description:
    "Jasa Notaris resmi di Jakarta Barat. Michael Huang, S.H., S.T., M.Kn. melayani akta autentik, pendirian PT/CV/PMA, akta jual beli properti, akta waris & hibah, RUPS, dan legalisasi dokumen. Terdaftar di Kemenkumham RI & Ikatan Notaris Indonesia (INI).",
  keywords: [
    "notaris jakarta barat",
    "notaris jakarta",
    "jasa notaris jakarta",
    "notaris pendirian pt jakarta",
    "notaris akta jual beli jakarta",
    "notaris cengkareng",
    "notaris terpercaya jakarta barat",
    "Michael Huang notaris",
    "akta autentik jakarta",
    "notaris pendirian cv jakarta",
    "notaris pma jakarta",
  ],
  openGraph: generateOGMetadata(
    "Notaris Jakarta Barat | Akta Autentik Resmi | Michael Huang, S.H., M.Kn.",
    "Jasa Notaris resmi di Jakarta Barat. Michael Huang, S.H., S.T., M.Kn. melayani akta autentik, pendirian PT/CV/PMA, akta jual beli properti, akta waris & hibah, RUPS, dan legalisasi dokumen. Terdaftar di Kemenkumham RI & Ikatan Notaris Indonesia (INI).",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/notaris-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/notaris-michael`,
  },
};

export default function NotarisPage() {
  const schema = generateLegalServiceSchema({
    name: "Notaris Jakarta Barat - Michael Huang, S.H., S.T., M.Kn.",
    description: "Jasa Notaris resmi di Jakarta Barat. Melayani akta autentik, pendirian PT/CV/PMA, akta jual beli properti, waris & hibah, dan legalisasi dokumen. Terdaftar di Kemenkumham RI dan Ikatan Notaris Indonesia (INI).",
    url: `${seoConfig.siteUrl}/notaris-michael`,
  });

  return (
    <>
      <StructuredData data={schema} />
      <StructuredData data={generateBreadcrumbSchema([{ name: "Beranda", url: "https://www.michaelhuang.id/" }, { name: "Notaris", url: "https://www.michaelhuang.id/notaris-michael" }])} />
      <NotarisClientPage />
    </>
  );
}
