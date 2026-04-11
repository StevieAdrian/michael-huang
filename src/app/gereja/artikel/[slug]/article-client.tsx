"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Share2,
  Tag,
} from "lucide-react";
import type { Article } from "@/shared/components/article-cards";
import type { ArticleDetail } from "@/shared/types/article";

interface ChurchArticleClientPageProps {
  article: ArticleDetail;
  relatedArticles: Article[];
}

export function ChurchArticleClientPage({
  article,
  relatedArticles,
}: ChurchArticleClientPageProps) {
  const readableSlug = article.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="pb-24 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
          <Link href="/gereja" className="hover:text-gold transition-colors">
            Gereja
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground/60 truncate max-w-[160px]">{readableSlug}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold">
              <Tag className="w-3 h-3" /> {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" /> {article.readTime} baca
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-display font-bold leading-tight mb-4 text-foreground">
            {article.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-between py-4 border-y border-border/50 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm">
                M
              </div>
              <div>
                <p className="font-semibold text-sm">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-gold/40 text-sm text-muted-foreground hover:text-gold transition-all">
              <Share2 className="w-4 h-4" /> Bagikan
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full aspect-[16/7] rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-10 overflow-hidden"
        >
          <div className="text-center text-muted-foreground/40">
            <BookOpen className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Gambar artikel akan ditampilkan di sini</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-none"
          style={{ color: "inherit" }}
        >
          {article.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base"
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-xl md:text-2xl font-display font-bold mt-8 mb-4 text-foreground"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-gold pl-5 py-2 my-6 bg-gold/5 rounded-r-xl"
                >
                  <p className="text-foreground font-medium italic text-base md:text-lg leading-relaxed">
                    "{block.text}"
                  </p>
                </blockquote>
              );
            }
            if (block.type === "list" && block.items) {
              return (
                <ul key={index} className="space-y-2 mb-5 ml-1">
                  {block.items.map((item, listIndex) => (
                    <li
                      key={listIndex}
                      className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                    >
                      <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/30 text-gold flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {listIndex + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </motion.div>

        <div className="mt-10 pt-8 border-t border-border/50">
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-muted border border-border/50 text-xs text-muted-foreground hover:border-gold/30 hover:text-gold transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              M
            </div>
            <div className="flex-1">
              <p className="font-bold text-base mb-1">Butuh bantuan lebih lanjut?</p>
              <p className="text-muted-foreground text-sm">
                Tim Gereja kami siap membantu Anda secara langsung.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all shrink-0 whitespace-nowrap"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/gereja">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Gereja
            </span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <h3 className="text-lg font-display font-bold mb-5">Artikel Terkait</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((item) => (
              <Link key={item.id} href={`/gereja/artikel/${item.slug}`}>
                <div className="bg-card border border-border rounded-xl p-4 hover:border-gold/30 hover:shadow transition-all group cursor-pointer">
                  <span className="text-xs font-bold text-gold">{item.category}</span>
                  <p className="font-semibold text-sm mt-1 group-hover:text-gold transition-colors leading-snug">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
