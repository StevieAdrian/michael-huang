import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { lawFirmArticles } from "@/app/constants/law-firm-articles";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: "Semua Artikel Law Firm | Michael Huang",
  description:
    "Kumpulan artikel dan wawasan hukum seputar litigasi, hukum korporat, ketenagakerjaan, dan perlindungan aset bisnis.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/law-firm-michael/artikel`,
  },
};

export default function LawFirmAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={lawFirmArticles}
      basePath="/law-firm-michael"
      title="Semua Artikel Law Firm"
      description="Wawasan hukum terbaru seputar litigasi, hukum korporat, ketenagakerjaan, dan perlindungan aset bisnis."
      breadcrumbLabel="Law Firm"
      backLabel="Kembali ke Law Firm"
      sectionLabel="Law Firm"
    />
  );
}
