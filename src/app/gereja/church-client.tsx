"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  Heart,
  HeartHandshake,
  Image,
  Mail,
  MapPin,
  Phone,
  QrCode,
  Users,
} from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { ArticleCards } from "@/shared/components/article-cards";
import { YoutubeSection } from "@/shared/components/youtube-section";
import {
  churchArticles,
  churchAnnouncements,
  churchContactInfo,
  churchDonationItems,
  churchSchedules,
  churchUpcomingEvents,
  churchWeeklyPhotoLabels,
  churchYoutubeVideos,
} from "@/app/constants/church";

export function ChurchClientPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [openDonation, setOpenDonation] = useState<string | null>("perpuluhan");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextSunday = new Date();

      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      if (now.getDay() === 0 && now.getHours() >= 10) {
        nextSunday.setDate(nextSunday.getDate() + 7);
      }
      nextSunday.setHours(10, 0, 0, 0);

      const diff = Math.max(0, nextSunday.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-24">
      <PageHero
        title="Glory Ministry Church"
        subtitle="Komunitas iman yang penuh kasih, harapan, dan sukacita. Bergabunglah bersama kami setiap Minggu."
        align="left"
      />

      <section className="bg-gradient-gold py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-primary-foreground font-semibold uppercase tracking-widest mb-6 text-sm">
            Ibadah Minggu Berikutnya
          </h3>
          <div className="flex justify-center gap-2 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl md:text-5xl font-display font-bold text-primary-foreground border border-white/20 shadow-lg">
                  {value.toString().padStart(2, "0")}
                </div>
                <span className="text-primary-foreground/80 text-xs md:text-sm uppercase tracking-wider mt-2 font-medium">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Jadwal Ibadah
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Hadir dan bertumbuh bersama dalam persekutuan setiap minggu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {churchSchedules.map((schedule) => (
              <div
                key={schedule.name}
                className="bg-card border border-border/50 p-6 rounded-2xl text-center hover:border-gold/30 transition-colors"
              >
                <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{schedule.name}</h3>
                <p className="text-muted-foreground text-sm">{schedule.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-6 h-6 text-gold" />
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Pengumuman
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {churchAnnouncements.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="bg-background border border-border/50 p-6 rounded-2xl hover:border-gold/30 transition-colors"
              >
                <span className="text-sm font-bold text-gold mb-2 block">
                  {item.date}
                </span>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <span className="text-sm font-semibold hover:text-gold transition-colors">
                  Selengkapnya &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-gold" />
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Foto Jemaat Mingguan
            </h2>
          </div>
          <p className="text-muted-foreground mt-1 mb-8 text-sm">
            Momen kebersamaan kita setiap minggu
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {churchWeeklyPhotoLabels.map((label) => (
              <div
                key={label}
                className="aspect-square rounded-xl md:rounded-2xl bg-card border border-border/50 flex flex-col items-center justify-center gap-2 hover:border-gold/30 transition-colors group overflow-hidden"
              >
                <Image className="w-8 h-8 text-muted-foreground/40 group-hover:text-gold/50 transition-colors" />
                <span className="text-xs text-muted-foreground/50 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4 text-center">
            Foto akan diperbarui setiap Minggu setelah ibadah selesai.
          </p>
        </div>
      </section>

      <YoutubeSection
        title="Tonton Khotbah di YouTube"
        subtitle="Seluruh ibadah dan khotbah tersedia di channel YouTube kami. Nonton kapan saja, di mana saja."
        videos={churchYoutubeVideos}
      />

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" /> Perpuluhan dan Persembahan
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Persembahan Online
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Kemurahan hati Anda memampukan kami untuk terus melayani komunitas,
              mendukung misi, dan menjangkau jiwa-jiwa baru.
            </p>
          </div>

          <div className="space-y-3">
            {churchDonationItems.map((item) => {
              const isOpen = openDonation === item.key;
              return (
                <div key={item.key} className="bg-card border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenDonation(isOpen ? null : item.key)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <HeartHandshake className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-base">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 border-t border-border/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                        <div className="flex flex-col items-center">
                          <p className="text-sm font-semibold text-muted-foreground mb-3">
                            Scan QRIS
                          </p>
                          <div className="w-40 h-40 md:w-48 md:h-48 bg-muted border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-gold/40 transition-colors">
                            <QrCode className="w-12 h-12 text-muted-foreground/40" />
                            <span className="text-xs text-muted-foreground/60 text-center px-3">
                              QR Code QRIS
                              <br />
                              akan tampil di sini
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Berlaku untuk semua bank & e-wallet
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-3">
                            Transfer Bank
                          </p>
                          <div className="space-y-3">
                            {item.accounts.map((account) => (
                              <div
                                key={`${item.key}-${account.bank}-${account.no}`}
                                className="bg-background border border-border/50 rounded-xl p-3"
                              >
                                <p className="text-xs font-bold text-gold mb-0.5">{account.bank}</p>
                                <p className="font-mono font-bold text-sm">{account.no}</p>
                                <p className="text-xs text-muted-foreground">{account.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {item.key === "perpuluhan" && (
                        <p className="text-xs text-muted-foreground mt-5 text-center italic">
                          Konfirmasi transfer via WhatsApp agar bendahara dapat mencatat dengan tepat.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konfirmasi%20persembahan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors"
            >
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Kegiatan Mendatang
            </h2>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
                Hubungi dan Temukan Kami
              </h2>
              <p className="text-muted-foreground mb-6">
                Tim pastoral kami siap melayani Anda. Jangan ragu menghubungi kami kapan saja.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span>{churchContactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span>{churchContactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-gold shrink-0" />
                  <span>{churchContactInfo.address}</span>
                </div>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>

            <div className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <iframe
                src={churchContactInfo.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              Kesaksian Jemaat
            </h2>
          </div>
        </div>
      </section>

      <ArticleCards
        articles={churchArticles}
        basePath="/gereja"
        title="Artikel & Renungan"
      />
    </div>
  );
}
