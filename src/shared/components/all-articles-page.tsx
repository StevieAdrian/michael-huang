"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Tag,
} from "lucide-react";
import type { Article } from "@/shared/components/article-cards";

interface AllArticlesPageProps {
  /** All articles to display */
  articles: Article[];
  /** The base path for this service, e.g. "/notaris-michael" */
  basePath: string;
  /** Page title, e.g. "Artikel Notaris" */
  title: string;
  /** Page description */
  description?: string;
  /** Label shown in breadcrumb, e.g. "Notaris" */
  breadcrumbLabel: string;
  /** Label for the back link, e.g. "Kembali ke Notaris" */
  backLabel: string;
  /** Section label badge, e.g. "Notaris" — shown as a badge on each card */
  sectionLabel: string;
}

export function AllArticlesPage({
  articles,
  basePath,
  title,
  description = "Kumpulan artikel, panduan, dan wawasan terkini untuk Anda.",
  breadcrumbLabel,
  backLabel,
  sectionLabel,
}: AllArticlesPageProps) {
  return (
    <div className="pb-24 pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-xs text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-gold transition-colors">
            Hub
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={basePath} className="hover:text-gold transition-colors">
            {breadcrumbLabel}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground/60">Semua Artikel</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider">
              {sectionLabel}
            </div>
            <span className="text-muted-foreground text-sm">
              {articles.length} artikel
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link href={`${basePath}/artikel/${article.slug}`}>
                <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="h-2 bg-gradient-gold" />
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold">
                        <Tag className="w-3 h-3" /> {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-3 text-foreground group-hover:text-gold transition-colors leading-snug flex-1">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gold mt-auto">
                      Baca selengkapnya
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:mt-14">
          <Link href={basePath}>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {backLabel}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
