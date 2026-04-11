"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Star,
  CheckCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ArticleCards } from "@/shared/components/article-cards";
import { WHATSAPP_PHONE } from "@/app/constants/links";
import {
  kostFacilities,
  kostHero,
  kostPlaces,
  kostTestimonials,
} from "@/app/constants/kost";
import { kostArticles } from "@/app/constants/kost-articles";

export function KostClientPage() {
  return (
    <div className="pb-24">
      <PageHero
        title={kostHero.title}
        subtitle={kostHero.subtitle}
        imageSrc={kostHero.imageSrc}
      />

      <section className="border-y border-border/50 bg-card py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-5 md:gap-12">
            {kostFacilities.map((fac, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <fac.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="font-medium text-xs md:text-sm">{fac.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {kostPlaces.map((kost, idx) => (
        <section
          key={kost.id}
          className={`py-12 md:py-20 ${
            idx % 2 === 0 ? "bg-background" : "bg-card"
          } border-b border-border/50`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold mb-4">
                  Lokasi {idx + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  {kost.name}
                </h2>
                <p className="text-gold font-semibold text-sm mb-3">{kost.tagline}</p>
                <div className="flex items-start gap-2 text-muted-foreground text-sm mb-5">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <span>{kost.address}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {kost.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {kost.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-background border border-border/50 rounded-2xl p-4 mb-6">
                  <p className="font-semibold text-sm mb-3">Tipe Kamar & Harga</p>
                  <div className="space-y-2">
                    {kost.roomTypes.map((r, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-border/40 last:border-b-0"
                      >
                        <div>
                          <p className="font-medium text-sm">{r.type}</p>
                          <p className="text-xs text-muted-foreground">{r.size}</p>
                        </div>
                        <p className="font-bold text-gold text-sm">
                          {r.price}
                          <span className="text-xs font-normal text-muted-foreground">
                            /bln
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                    kost.waMsg,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Tanya / Booking via WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={idx % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl h-[280px] md:h-[360px]">
                  <iframe
                    src={kost.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* <div className="mt-4 p-4 bg-card border border-border/50 rounded-xl flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Hubungi pengelola</p>
                    <p className="font-semibold text-sm">+62 812 3456 7890</p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 md:py-16 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Apa Kata Penghuni Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {kostTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ArticleCards articles={kostArticles} basePath="/kost" title="Artikel Seputar Hunian" />

      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden bg-background/80 backdrop-blur-md border-t border-border/50">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=Halo, saya ingin menanyakan kamar kost yang tersedia`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> Tanya Kamar via WhatsApp
        </a>
      </div>
    </div>
  );
}
