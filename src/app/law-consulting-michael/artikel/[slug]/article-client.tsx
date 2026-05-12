"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { LAW_CONSULTING_WHATSAPP_URL } from "@/app/constants/links";

interface LawConsultingArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function LawConsultingArticleClientPage({
  article,
  relatedArticles,
}: LawConsultingArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/law-consulting-michael"
      breadcrumbLabel="Konsultasi Hukum"
      backLabel="Kembali ke Konsultasi Hukum"
      cta={{
        title: "Perlu evaluasi risiko hukum bisnis?",
        subtitle: "Tim konsultan hukum kami siap bantu asesmen dan strategi mitigasi.",
        buttonText: "Konsultasi Sekarang",
        href: LAW_CONSULTING_WHATSAPP_URL,
      }}
    />
  );
}
