import type { Metadata } from "next";
import { NotarisClientPage } from "./notaris-client";
import { generateOGMetadata, seoConfig } from "@/config/seo-config";
import { generateLegalServiceSchema , generateBreadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Notaris | Michael Huang",
  description:
    "Pembuatan akta autentik yang sah, cepat, dan terpercaya. Melayani individu dan korporasi di seluruh Indonesia.",
  openGraph: generateOGMetadata(
    "Notaris | Michael Huang",
    "Pembuatan akta autentik yang sah, cepat, dan terpercaya. Melayani individu dan korporasi di seluruh Indonesia.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/notaris-michael`
  ),
  alternates: {
    canonical: `${seoConfig.siteUrl}/notaris-michael`,
  },
};

export default function NotarisPage() {
  const schema = generateLegalServiceSchema({
    name: "Notaris Michael Huang",
    description: "Layanan Notaris profesional di Jakarta Barat.",
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
