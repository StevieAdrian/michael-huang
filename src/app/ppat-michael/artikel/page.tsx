import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { ppatArticles } from "@/app/constants/ppat-articles";

export const metadata: Metadata = {
  title: "Semua Artikel PPAT | Michael Huang",
  description:
    "Kumpulan artikel seputar layanan PPAT, akta tanah, jual beli properti, dan sertifikat hak atas tanah.",
};

export default function PPATAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={ppatArticles}
      basePath="/ppat-michael"
      title="Semua Artikel PPAT"
      description="Panduan dan informasi seputar layanan PPAT, akta tanah, jual beli properti, dan sertifikat hak atas tanah."
      breadcrumbLabel="PPAT"
      backLabel="Kembali ke PPAT"
      sectionLabel="PPAT"
    />
  );
}
