import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { kostArticles } from "@/app/constants/kost-articles";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: "Semua Artikel Kost & Hunian | Michael Huang",
  description:
    "Kumpulan artikel seputar tips hunian, kost nyaman, dan panduan memilih tempat tinggal.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/kost-gemini-koolkost/artikel`,
  },
};

export default function KostAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={kostArticles}
      basePath="/kost-gemini-koolkost"
      title="Semua Artikel Seputar Hunian"
      description="Tips hunian, panduan memilih kost, dan informasi seputar tempat tinggal nyaman."
      breadcrumbLabel="Kost"
      backLabel="Kembali ke Kost"
      sectionLabel="Kost & Hunian"
    />
  );
}
