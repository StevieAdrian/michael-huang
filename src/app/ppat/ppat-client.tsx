"use client";

import { motion } from "framer-motion";
import { Landmark, ArrowRight, Star } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ArticleCards } from "@/shared/components/article-cards";
import {
  ppatHero,
  ppatServices,
  ppatProcess,
  ppatContacts,
  ppatMapEmbedUrl,
  ppatReviews,
  ppatGalleryImages,
} from "@/app/constants/ppat";
import { ppatArticles } from "@/app/constants/ppat-articles";
import { PPAT_WHATSAPP_URL } from "@/app/constants/links";
import { Gallery } from "@/shared/components/gallery";

export function PPATClientPage() {
  return (
    <div className="pb-24">
      <PageHero
        title={ppatHero.title}
        subtitle={ppatHero.subtitle}
        align={ppatHero.align}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Layanan PPAT Kami
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Kami menangani seluruh transaksi hak atas tanah dan satuan rumah
              susun
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ppatServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Landmark className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Alur Proses PPAT
            </h2>
            <p className="text-muted-foreground">
              Proses yang transparan dan mudah dipahami
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" />
            {ppatProcess.map((p, i) => (
              <div
                key={i}
                className="relative text-center p-6 bg-background rounded-2xl border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-xl shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  {p.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Gallery 
        images={ppatGalleryImages} 
        title="Galeri Proyek & Kantor"
        subtitle="Dokumentasi penandatanganan akta dan suasana kantor kami."
      />

      <section className="py-12 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4" id="feedback">
                Feedback Client
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <span className="text-5xl font-bold text-foreground">5.0</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    Berdasarkan kepuasan klien
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ppatReviews.map((review, i) => (
                <div
                  key={i}
                  className="p-6 bg-background border border-border/50 rounded-2xl shadow-sm"
                >
                  <div className="flex gap-1 text-gold mb-3">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3 italic">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-sm">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Hubungi PPAT Kami
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Konsultasi gratis untuk mengetahui dokumen yang perlu Anda
                siapkan dan estimasi biaya layanan kami.
              </p>
              <div className="space-y-4 mb-8">
                {ppatContacts.map((contact, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <contact.icon className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-muted-foreground">{contact.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={PPAT_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                Konsultasi via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <iframe
                src={ppatMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <ArticleCards
        articles={ppatArticles}
        basePath="/ppat-michael"
        title="Artikel Seputar PPAT & Tanah"
      />
    </div>
  );
}
