"use client";

import { motion } from "framer-motion";
import { FileText, Phone, ArrowRight, Star } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ArticleCards } from "@/shared/components/article-cards";
import {
  notarisHero,
  notarisServices,
  notarisWhyUs,
  notarisArticles,
  notarisContacts,
  notarisMapEmbedUrl,
  notarisReviews,
  notarisGalleryImages,
} from "@/app/constants/notaris";
import { NOTARIS_WHATSAPP_URL } from "@/app/constants/links";
import { Gallery } from "@/shared/components/gallery";

export function NotarisClientPage() {
  return (
    <div className="pb-24">
      <PageHero
        title={notarisHero.title}
        subtitle={notarisHero.subtitle}
        align={notarisHero.align}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Layanan Kami
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Kami menyediakan berbagai layanan notaris untuk kebutuhan hukum
              Anda
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {notarisServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 text-gold" />
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
              Mengapa Memilih Kami?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {notarisWhyUs.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 bg-background rounded-2xl border border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery 
        images={notarisGalleryImages} 
        title="Galeri Kantor"
        subtitle="Suasana kantor dan fasilitas layanan kami untuk kenyamanan Anda."
      />

      <section className="py-12 md:py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
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
                    Berdasarkan ulasan Google
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {notarisReviews.map((review, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-border/50 rounded-2xl"
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
                Konsultasi Sekarang
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Hubungi kami untuk konsultasi awal secara gratis. Tim notaris
                kami siap membantu Anda memahami proses dan dokumen yang
                diperlukan.
              </p>
              <div className="space-y-4 mb-8">
                {notarisContacts.map((contact, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <contact.icon className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-muted-foreground">{contact.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={NOTARIS_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  Konsultasi via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+6281234567890"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-gold/50 text-foreground font-semibold rounded-xl text-sm transition-all"
                >
                  <Phone className="w-4 h-4" /> Telepon Sekarang
                </a>
              </div>
            </div>
            <div className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <iframe
                src={notarisMapEmbedUrl}
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
        articles={notarisArticles}
        basePath="/notaris-michael"
        title="Artikel Hukum Notaris"
      />
    </div>
  );
}
