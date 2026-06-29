import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { notarisArticles } from "@/app/constants/notaris-articles";

export const metadata: Metadata = {
  title: "Semua Artikel Notaris | Michael Huang",
  description:
    "Kumpulan artikel, panduan, dan informasi seputar layanan notaris, akta autentik, pendirian badan usaha, dan legalitas dokumen.",
};

export default function NotarisAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={notarisArticles}
      basePath="/notaris-michael"
      title="Semua Artikel Notaris"
      description="Kumpulan artikel, panduan, dan informasi seputar layanan notaris, akta autentik, dan legalitas dokumen."
      breadcrumbLabel="Notaris"
      backLabel="Kembali ke Notaris"
      sectionLabel="Notaris"
    />
  );
}
