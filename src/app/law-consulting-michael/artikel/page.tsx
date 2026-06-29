import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { lawConsultingArticles } from "@/app/constants/law-consulting-articles";

export const metadata: Metadata = {
  title: "Semua Artikel Konsultasi Hukum | Michael Huang",
  description:
    "Kumpulan artikel seputar legal due diligence, kontrak bisnis, kepatuhan hukum startup, dan konsultasi hukum.",
};

export default function LawConsultingAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={lawConsultingArticles}
      basePath="/law-consulting-michael"
      title="Semua Artikel Konsultasi Hukum"
      description="Artikel seputar legal due diligence, kontrak bisnis, dan kepatuhan hukum untuk bisnis Anda."
      breadcrumbLabel="Konsultasi Hukum"
      backLabel="Kembali ke Konsultasi Hukum"
      sectionLabel="Konsultasi Hukum"
    />
  );
}
