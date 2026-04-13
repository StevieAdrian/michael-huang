"use client";

import { useState } from "react";
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
  lawFirmArticles,
  lawFirmFAQs,
  lawFirmReviews,
  lawFirmTestimonials,
  lawFirmMapEmbedUrl,
} from "@/app/constants/law-firm";
import { LAW_FIRM_FORM_WHATSAPP_URL, WHATSAPP_PHONE } from "@/app/constants/links";
import { Gallery } from "@/shared/components/gallery";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lawFirmTeam.map((lawyer, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
              >
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
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

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Feedback Client
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <span className="text-5xl font-bold text-foreground">4.9</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    Berdasarkan 248 ulasan
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {lawFirmReviews.map((review, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-border/50 rounded-2xl"
                >
                  <div className="flex gap-1 text-gold mb-3">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-sm">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Wawasan Terbaru
            </h2>
            <button className="hidden md:flex text-gold font-semibold items-center gap-2 hover:gap-4 transition-all">
              Semua Artikel <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lawFirmArticles.map((article, i) => (
              <div
                key={i}
                className="bg-background border border-border/50 p-6 md:p-8 rounded-2xl hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gold mb-4 block">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-6">{article.excerpt}</p>
                <button className="text-foreground font-semibold flex items-center gap-2 hover:text-gold transition-colors">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
