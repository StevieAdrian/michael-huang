"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { YoutubeSection } from "@/shared/components/youtube-section";
import { ArticleCards } from "@/shared/components/article-cards";
import {
  musicHero,
  musicServices,
  musicTestimonials,
  musicYoutubeVideos,
} from "@/app/constants/music";
import { musicArticles } from "@/app/constants/music-articles";
import {
  MUSIC_BOOKING_WHATSAPP_URL,
  YOUTUBE_CHANNEL_URL,
} from "@/app/constants/links";

export function MusicClientPage() {
  return (
    <div className="pb-24">
      <PageHero
        title={musicHero.title}
        subtitle={musicHero.subtitle}
        align={musicHero.align}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Layanan Studio
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Solusi produksi musik lengkap dari rekaman hingga distribusi
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {musicServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 flex gap-5 items-start hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <YoutubeSection
        title="Konten Studio di YouTube"
        subtitle="Tonton proses produksi, karya terbaru, dan tutorial dari Michael Music Studio"
        videos={musicYoutubeVideos}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Apa Kata Klien Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {musicTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Siap Merekam Karya Terbaik Anda?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Hubungi kami untuk booking sesi studio atau diskusi proyek produksi musik Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={MUSIC_BOOKING_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              💬 Booking Studio via WhatsApp
            </a>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-gold/50 text-foreground font-semibold rounded-xl text-sm transition-all"
            >
              <ArrowRight className="w-4 h-4" /> Tonton YouTube Kami
            </a>
          </div>
        </div>
      </section>

      <ArticleCards articles={musicArticles} basePath="/musik" title="Artikel Produksi Musik" />
    </div>
  );
}
