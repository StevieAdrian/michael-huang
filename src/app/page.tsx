"use client";

import { motion } from "framer-motion";
import {
  Scale,
  TrendingUp,
  Home as HomeIcon,
  Coffee,
  Heart,
  ArrowRight,
  Search,
  Star,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ClientLogos } from "@/features/home/components/client-logos";

const services = [
  {
    title: "Law Firm",
    description:
      "Authoritative legal counsel, corporate structuring, and litigation with a gold standard approach.",
    icon: Scale,
    href: "/law-firm",
    color: "from-blue-900/50 to-slate-900/50",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Consulting",
    description:
      "Strategic insights and financial audits driving measurable revenue growth and transformation.",
    icon: TrendingUp,
    href: "/consulting",
    color: "from-emerald-900/50 to-slate-900/50",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Kost Premium",
    description:
      "High-end boarding houses with real-time availability, luxury facilities, and transparent pricing.",
    icon: HomeIcon,
    href: "/kost",
    color: "from-orange-900/50 to-slate-900/50",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Warteg Modern",
    description:
      "Vibrant, appetizing local cuisine elevated with modern presentation and premium catering services.",
    icon: Coffee,
    href: "/warteg",
    color: "from-red-900/50 to-slate-900/50",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Gereja",
    description:
      "A welcoming community space, service schedules, media archives, and charity initiatives.",
    icon: Heart,
    href: "/gereja",
    color: "from-purple-900/50 to-slate-900/50",
    border: "group-hover:border-purple-500/50",
  },
];

const googleReviews = [
  {
    name: "Budi Santoso",
    initials: "BS",
    rating: 5,
    time: "2 minggu lalu",
    text: "Pelayanan luar biasa! Michael.com membantu bisnis saya berkembang pesat. Tim yang profesional dan responsif di setiap unit bisnis mereka.",
  },
  {
    name: "Dewi Rahayu",
    initials: "DR",
    rating: 5,
    time: "1 bulan lalu",
    text: "Saya menggunakan layanan Law Firm dan Consulting. Hasilnya melampaui ekspektasi. Sangat merekomendasikan untuk semua kebutuhan bisnis Anda.",
  },
  {
    name: "Ahmad Fauzi",
    initials: "AF",
    rating: 5,
    time: "3 minggu lalu",
    text: "Kost premium dengan fasilitas terlengkap. Tim sangat ramah dan responsif. Warteg-nya juga enak banget, harga terjangkau!",
  },
  {
    name: "Rina Kusuma",
    initials: "RK",
    rating: 5,
    time: "2 bulan lalu",
    text: "Ekosistem bisnis yang terintegrasi dengan sangat baik. Dari hukum, konsultasi, hingga properti — semua ditangani secara profesional.",
  },
];

export default function Home() {
  return (
    <div className="pb-24">
      <PageHero
        title="One Name, Every Solution"
        subtitle="The unified digital gateway for all Michael.com premium business units. Experience the gold standard across industries."
      />

      {/* Service Cards */}
      <section className="py-16 md:py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Our Ecosystem
            </h2>
            <p className="text-muted-foreground">
              Select a business unit below to explore our specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <a href={service.href}>
                  <div
                    className={`group h-full bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${service.border}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                        <service.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground group-hover:text-gold transition-colors" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground flex-1 leading-relaxed mb-6 text-sm md:text-base">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold text-gold mt-auto pt-4 border-t border-border/50">
                        Explore Unit{" "}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <ClientLogos />

      {/* Global Search Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8">
            Looking for something specific?
          </h2>
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative flex items-center bg-background border border-border/50 rounded-2xl p-2 shadow-xl focus-within:border-gold/50 transition-colors">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <input
                type="text"
                placeholder="Search lawyers, rooms, menu items..."
                className="w-full bg-transparent border-none text-foreground px-3 py-3 focus:outline-none focus:ring-0 text-base placeholder:text-muted-foreground/50"
              />
              <button className="px-5 md:px-8 py-3 bg-foreground text-background hover:bg-gold hover:text-primary-foreground font-semibold rounded-xl transition-colors duration-300 text-sm md:text-base whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-2 mb-3">
                {/* Google "G" logo coloured circles */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#4285F4" }}
                  >
                    G
                  </span>
                </div>
                <span className="text-sm font-semibold text-muted-foreground">
                  Google Reviews
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
                What Our Clients Say
              </h2>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground text-sm">
                  · 312 ulasan di Google
                </span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Michael.com+Jakarta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline underline-offset-4 shrink-0"
            >
              Lihat semua ulasan <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {googleReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col gap-4 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Top: avatar + name + Google icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm leading-tight">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.time}
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#4285F4" }}
                    >
                      G
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Overall rating bar summary */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 py-8 px-6 bg-card border border-border/50 rounded-2xl">
            <div className="text-center">
              <div className="text-5xl font-display font-bold text-gradient-gold">
                4.9
              </div>
              <div className="flex gap-1 justify-center my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">312 ulasan</p>
            </div>
            <div className="w-px h-16 bg-border hidden sm:block" />
            <div className="space-y-2 flex-1 max-w-xs w-full">
              {[
                { label: "5 ★", pct: 92 },
                { label: "4 ★", pct: 6 },
                { label: "3 ★", pct: 2 },
                { label: "2 ★", pct: 0 },
                { label: "1 ★", pct: 0 },
              ].map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground w-7 shrink-0">
                    {label}
                  </span>
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-muted-foreground w-6 text-right">
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location / Maps Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Info side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
                <MapPin className="w-3.5 h-3.5" /> Temukan Kami
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">
                Kantor Pusat Michael.com
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Kami berlokasi di jantung bisnis Jakarta. Kunjungi kami untuk
                konsultasi tatap muka, atau hubungi kami melalui WhatsApp untuk
                jadwal pertemuan.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Alamat
                    </p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      Jl. Jend. Sudirman No. 1, Karet Tengsin, Jakarta Pusat 10220
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Telepon / WhatsApp
                    </p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                    >
                      +62 812 3456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:info@michael.com"
                      className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                    >
                      info@michael.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Jl.+Sudirman+Jakarta"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all text-sm"
                >
                  <MapPin className="w-4 h-4" /> Buka di Google Maps
                </a>
                <a
                  href="https://wa.me/6281234567890?text=Halo, saya ingin berkonsultasi dengan Michael.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border hover:border-gold/50 text-foreground font-semibold rounded-xl transition-all text-sm"
                >
                  💬 Hubungi via WhatsApp
                </a>
              </div>
            </div>

            {/* Map side */}
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl h-[300px] md:h-[420px] relative group">
              <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81532607507515!3d-6.201900993790556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(0.3) contrast(1.1)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
