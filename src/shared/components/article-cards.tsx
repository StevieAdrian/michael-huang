import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

interface ArticleCardsProps {
  articles: Article[];
  basePath: string;
  title?: string;
}

export function ArticleCards({
  articles,
  basePath,
  title = "Artikel & Wawasan",
}: ArticleCardsProps) {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-display font-bold">{title}</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Informasi dan panduan terkini untuk Anda
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline underline-offset-4 shrink-0"
          >
            Lihat semua artikel <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
      </div>
    </section>
  );
}
