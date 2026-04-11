"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ArticleCards } from "@/shared/components/article-cards";
import { ClientLogos } from "@/components/client-logos";
import {
  lawConsultingHero,
  lawConsultingServices,
  lawConsultingFaqs,
  lawConsultingArticles,
  lawConsultingContacts,
  lawConsultingMapEmbedUrl,
  lawConsultingReviews,
  lawConsultingGalleryImages,
} from "@/app/constants/law-consulting";
import { LAW_CONSULTING_WHATSAPP_URL } from "@/app/constants/links";
import { Gallery } from "@/shared/components/gallery";

export function LawConsultingClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-24">
      <PageHero
        title={lawConsultingHero.title}
        subtitle={lawConsultingHero.subtitle}
        align={lawConsultingHero.align}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Area Layanan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Layanan konsultasi hukum komprehensif untuk berbagai kebutuhan
              bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lawConsultingServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svc.icon className="w-5 h-5 text-gold" />
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

      <ClientLogos />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Pertanyaan Umum
            </h2>
          </div>
          <div className="space-y-3">
            {lawConsultingFaqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                >
                  <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Gallery 
        images={lawConsultingGalleryImages} 
        title="Galeri Kegiatan & Advisory"
        subtitle="Momen kolaborasi strategis dan suasana diskusi tim ahli kami."
      />

      <section className="py-12 md:py-24 bg-background">
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
                    Berdasarkan klien korporasi
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {lawConsultingReviews.map((review, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-border/50 rounded-2xl shadow-sm"
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

      <section className="py-12 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Konsultasikan Kebutuhan Hukum Anda
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Jadwalkan sesi konsultasi dengan konsultan hukum kami. Sesi
                pertama gratis untuk memahami situasi bisnis Anda.
              </p>
              <div className="space-y-4 mb-8">
                {lawConsultingContacts.map((contact, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <contact.icon className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-muted-foreground">{contact.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={LAW_CONSULTING_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                Mulai Konsultasi Gratis <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <iframe
                src={lawConsultingMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <ArticleCards
        articles={lawConsultingArticles}
        basePath="/law-consulting"
        title="Artikel Konsultasi Hukum"
      />
    </div>
  );
}
