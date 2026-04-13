"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import {
  franchiseHero,
  franchiseServices,
  franchiseFaqs,
  franchiseContacts,
  franchiseReviews,
  franchiseGalleryImages,
} from "@/app/constants/franchise";
import { FRANCHISE_WHATSAPP_URL } from "@/app/constants/links";
import { Gallery } from "@/shared/components/gallery";

export function FranchiseClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-24">
      <PageHero
        title={franchiseHero.title}
        subtitle={franchiseHero.subtitle}
        align={franchiseHero.align}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Model & Peluang Bisnis
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Berbagai macam peluang investasi yang disesuaikan dengan ekosistem bisnis terpercaya kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {franchiseServices.map((svc, i) => (
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

      <section className="py-12 md:py-20 bg-background border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Pertanyaan Umum
            </h2>
          </div>
          <div className="space-y-3">
            {franchiseFaqs.map((faq, i) => (
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
        images={franchiseGalleryImages} 
        title="Galeri Aktivitas Franchise"
        subtitle="Intip suasana otentik dan proses persiapan standar layanan unggulan kami."
      />

      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Feedback Mitra
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
                    Berdasarkan mitra investasi kami
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {franchiseReviews.map((review, i) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Siap Memulai Ekspansi Bisnis?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Hubungi tim kemitraan kami untuk mendapatkan penawaran proposal lengkap The Gemini Franchise serta pelajari bagaimana sistem kami membantu Anda beroperasi dengan profitabel.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {franchiseContacts.map((contact, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-sm">
                <contact.icon className="w-5 h-5 text-gold shrink-0" />
                <span className="text-muted-foreground">{contact.text}</span>
              </div>
            ))}
          </div>
          <a
            href={FRANCHISE_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
          >
            Hubungi Tim Kemitraan Sekarang <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
