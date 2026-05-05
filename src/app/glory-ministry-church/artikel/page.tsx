import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { churchArticles } from "@/app/constants/church-articles";

export const metadata: Metadata = {
  title: "Semua Artikel Gereja | Glory Ministry Church",
  description:
    "Kumpulan artikel, renungan, dan panduan rohani dari Glory Ministry Church.",
};

export default function ChurchAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={churchArticles}
      basePath="/glory-ministry-church"
      title="Semua Artikel & Renungan"
      description="Kumpulan artikel, renungan, dan panduan rohani untuk menguatkan iman dan kehidupan Anda."
      breadcrumbLabel="Gereja"
      backLabel="Kembali ke Gereja"
      sectionLabel="Gereja"
    />
  );
}
