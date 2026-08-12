import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { musicArticles } from "@/app/constants/music-articles";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: "Semua Artikel Produksi Musik | Michael Huang",
  description:
    "Kumpulan artikel seputar produksi musik, recording, mixing, dan tips bermusik.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/musik-production-michael/artikel`,
  },
};

export default function MusicAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={musicArticles}
      basePath="/musik-production-michael"
      title="Semua Artikel Produksi Musik"
      description="Artikel seputar produksi musik, recording, mixing, dan tips bermusik profesional."
      breadcrumbLabel="Produksi Musik"
      backLabel="Kembali ke Produksi Musik"
      sectionLabel="Produksi Musik"
    />
  );
}
