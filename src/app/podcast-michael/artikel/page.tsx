import type { Metadata } from "next";
import { AllArticlesPage } from "@/shared/components/all-articles-page";
import { podcastArticles } from "@/app/constants/podcast-articles";

export const metadata: Metadata = {
  title: "Semua Artikel Podcast | Michael Huang",
  description:
    "Kumpulan artikel seputar podcast, obrolan mendalam tentang iman, bisnis, dan hukum.",
};

export default function PodcastAllArticlesPage() {
  return (
    <AllArticlesPage
      articles={podcastArticles}
      basePath="/podcast-michael"
      title="Semua Artikel Podcast"
      description="Artikel seputar podcast, obrolan mendalam tentang iman, bisnis, hukum, dan kehidupan."
      breadcrumbLabel="Podcast"
      backLabel="Kembali ke Podcast"
      sectionLabel="Podcast"
    />
  );
}
