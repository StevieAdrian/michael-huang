"use client";

import { ArticleDetailPage } from "@/shared/components/article-detail-page";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";
import { LAW_FIRM_FORM_WHATSAPP_URL } from "@/app/constants/links";

interface LawFirmArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function LawFirmArticleClientPage({
  article,
  relatedArticles,
}: LawFirmArticleClientPageProps) {
  return (
    <ArticleDetailPage
      article={article}
      relatedArticles={relatedArticles}
      basePath="/law-firm-michael"
      breadcrumbLabel="Law Firm"
      backLabel="Kembali ke Law Firm"
      cta={{
        title: "Butuh pendampingan hukum profesional?",
        subtitle: "Tim Law Firm kami siap membantu Anda dengan strategi hukum terbaik.",
        buttonText: "Konsultasi Sekarang",
        href: LAW_FIRM_FORM_WHATSAPP_URL,
      }}
    />
  );
}
