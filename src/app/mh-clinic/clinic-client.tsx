"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, Phone, ArrowRight, ChevronDown, Bell } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import {
  clinicHero,
  clinicWhyUs,
  clinicContacts,
  clinicMapEmbedUrl,
  clinicGalleryImages,
  clinicFaqs,
} from "@/app/constants/clinic";
import { googleReviews } from "@/features/home/constants/reviews";
import { CLINIC_WHATSAPP_URL, WHATSAPP_PHONE } from "@/app/constants/links";

const Gallery = dynamic(() => import("@/shared/components/gallery").then((mod) => mod.Gallery));
const TestimonialCarousel = dynamic(() => import("@/shared/components/testimonial-carousel").then((mod) => mod.TestimonialCarousel));
const RelatedServices = dynamic(() => import("@/shared/components/related-services").then((mod) => mod.RelatedServices));

export function ClinicClientPage() {
  return (
    <div className="pb-24 overflow-hidden">
      {/* Hero Section */}
      <PageHero
        title={clinicHero.title}
        subtitle={clinicHero.subtitle}
        imageSrc="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200"
        align={clinicHero.align}
      />

      {/* Opening Soon Banner */}
      <section className="py-12 bg-card border-y border-border/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-gold/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Bell className="w-3.5 h-3.5 animate-bounce" /> Segera Hadir / Opening Soon
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            Dapatkan Penawaran Eksklusif Early Bird!
          </h2>
          {/*<p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Daftarkan diri Anda dalam antrean prioritas sekarang dan dapatkan diskon spesial hingga <strong>50%</strong> untuk semua jenis perawatan pada bulan pembukaan.
          </p>*/}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Keunggulan MH Clinic
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Menghadirkan kenyamanan dan keandalan medis untuk hasil estetika yang optimal dan aman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicWhyUs.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 border border-gold/20">
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

      {/* Gallery Section */}
      <Gallery
        images={clinicGalleryImages}
        title="Galeri Konseptual & Desain Klinik"
        subtitle="Intip keindahan desain interior modern dan suasana tenang yang kami persiapkan untuk kunjungan Anda kelak."
      />

      {/* Testimonials (General Trust) */}
      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 text-center">
            Komitmen Ekosistem Michael Huang
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto text-sm md:text-base">
            Dipercaya oleh ratusan klien di berbagai unit bisnis atas integritas, kualitas, dan pelayanan prima kami.
          </p>
          <TestimonialCarousel items={googleReviews} />
        </div>
      </section>

      {/* Registration & Map Consultation */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Early Registration
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Daftar Prioritas Sekarang
              </h2>
              {/*<p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
                Jadilah yang pertama merasakan perawatan kecantikan kelas dunia di MH Clinic. Dengan mendaftar sekarang, Anda akan dimasukkan ke dalam daftar prioritas undangan pembukaan (soft-opening) dan mendapatkan kupon diskon eksklusif.
              </p>*/}
              
              <div className="space-y-4 mb-8">
                {clinicContacts.map((contact, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <contact.icon className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-muted-foreground">{contact.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  Daftar Prioritas via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:+${WHATSAPP_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-gold/50 text-foreground font-semibold rounded-xl text-sm transition-all"
                >
                  <Phone className="w-4 h-4" /> Hubungi Kami
                </a>
              </div>
            </div>

            {/* Location Map */}
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-xl relative">
              <iframe
                title="Peta Lokasi Kantor Pusat Dr. Michael / MH Clinic"
                src={clinicMapEmbedUrl}
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Pertanyaan Seputar MH Clinic
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Temukan informasi penting seputar rencana pembukaan dan layanan klinik kecantikan kami.
            </p>
          </div>
          
          <div className="space-y-3">
            {clinicFaqs.map((faq, i) => (
              <details
                key={i}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-pink-500/20 transition-colors group"
                name="clinic-faq"
              >
                <summary className="flex items-center justify-between p-5 md:p-6 text-left gap-4 cursor-pointer list-none marker:hidden">
                  <span className="font-semibold text-base md:text-lg text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gold shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-6 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentPath="/mh-clinic" />
    </div>
  );
}
