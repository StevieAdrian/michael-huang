"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { MUSIC_BOOKING_WHATSAPP_URL } from "@/app/constants/links";

interface MusicArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function MusicArticleClientPage({
  article,
  relatedArticles,
}: MusicArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/musik-production-michael"
      breadcrumbLabel="Musik"
      backLabel="Kembali ke Musik"
      cta={{
        title: "Punya proyek audio yang mau diproduksi?",
        subtitle: "Tim musik kami siap bantu dari konsep sampai rilisan final.",
        buttonText: "Booking Studio",
        href: MUSIC_BOOKING_WHATSAPP_URL,
      }}
    />
  );
}
