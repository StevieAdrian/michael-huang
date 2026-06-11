"use client";

import { useState } from "react";
import { RelatedServices } from "@/shared/components/related-services";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Star,
  ChevronDown,
  Award,
} from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ClientLogos } from "@/components/client-logos";
import { Testimonials } from "@/shared/components/testimonials";
import {
  lawFirmHero,
  lawFirmPracticeAreas,
  lawFirmStats,
  lawFirmTeam,
  lawFirmGalleryImages,
  lawFirmFAQs,
  lawFirmTestimonials,
  lawFirmMapEmbedUrl,
} from "@/app/constants/law-firm";
import { lawFirmArticles } from "@/app/constants/law-firm-articles";
import { googleReviews } from "@/features/home/constants/reviews";
import { TestimonialCarousel } from "@/shared/components/testimonial-carousel";
import { LAW_FIRM_FORM_WHATSAPP_URL, WHATSAPP_PHONE } from "@/app/constants/links";
import { Gallery } from "@/shared/components/gallery";
import { ArticleCards } from "@/shared/components/article-cards";

export function LawFirmClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    issueType: "Hukum Korporasi",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name} ingin konsultasi mengenai ${formData.issueType}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pb-24">
      <PageHero
        title={lawFirmHero.title}
        subtitle={lawFirmHero.subtitle}
        imageSrc={lawFirmHero.imageSrc}
        align={lawFirmHero.align}
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-lg">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" /> Berdiri Sejak 2010
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Komitmen Teguh untuk Keadilan
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Kami menyediakan representasi hukum elit untuk individu kelas atas dan entitas korporasi, memastikan warisan dan kepentingan Anda terlindungi dengan sempurna.
              </p>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 gap-4">
              {lawFirmStats.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-border/50"
                >
                  <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Bidang Keahlian
              </h2>
              <p className="text-muted-foreground">
                Solusi hukum komprehensif yang disesuaikan untuk kebutuhan bisnis dan personal Anda.
              </p>
            </div>
            <button className="text-gold font-semibold flex items-center gap-2 hover:gap-4 transition-all">
              Lihat Semua Bidang <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawFirmPracticeAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 border border-border/50 rounded-2xl bg-card hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <area.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="py-12 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Jadwalkan Konsultasi Rahasia
              </h2>
              <p className="text-muted-foreground mb-8">
                Ambil langkah pertama untuk menyelesaikan masalah hukum Anda. Partner kami siap meninjau kasus Anda.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Kerahasiaan ketat terjamin",
                  "Penilaian kasus awal",
                  "Struktur biaya yang transparan",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-gold" /> {item}
                  </li>
                ))}
              </ul>

              <a
                href={LAW_FIRM_FORM_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
              >
                Buat Janji Temu <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="glass-panel-gold rounded-3xl p-6 md:p-10">
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Nama
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Masukkan Nama Anda"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Jenis Masalah
                  </label>
                  <select
                    value={formData.issueType}
                    onChange={(e) =>
                      setFormData({ ...formData, issueType: e.target.value })
                    }
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none text-foreground"
                  >
                    <option>Hukum Korporasi</option>
                    <option>Litigasi</option>
                    <option>Hukum Keluarga</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-gradient-gold text-primary-foreground font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all active:scale-[0.98]"
                >
                  Buat Janji Temu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Partner Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Pakar hukum terkemuka dengan pengalaman gabungan puluhan tahun dalam menangani kasus-kasus berisiko tinggi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {lawFirmTeam.map((lawyer, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
              >
                <img
                  src={lawyer.image}
                  alt={lawyer.name || "Partner law firm"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-left">
                  <p className="text-gold font-semibold text-sm mb-1">
                    {lawyer.spec}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {lawyer.name}
                  </h3>
                  <p className="text-muted-foreground">{lawyer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery 
        images={lawFirmGalleryImages} 
        title="Galeri Firma"
        subtitle="Elegansi dan profesionalisme dalam setiap sudut kantor kami."
      />

      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 text-center">
            Feedback Client
          </h2>
          <TestimonialCarousel items={googleReviews} />
        </div>
      </section>

      <ArticleCards
        articles={lawFirmArticles}
        basePath="/law-firm-michael"
        title="Wawasan Terbaru"
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-3">
            {lawFirmFAQs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                >
                  <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[400px] w-full">
        <iframe
          src={lawFirmMapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="py-12 md:py-24 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Kesuksesan Klien
            </h2>
          </div>
          <Testimonials items={lawFirmTestimonials} />
        </div>
      </section>

      <RelatedServices currentPath="/law-firm-michael" />
    </div>
  );
}
