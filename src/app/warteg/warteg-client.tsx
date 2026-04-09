"use client";

import { useEffect, useState } from "react";
import { ChefHat, MapPin } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { Testimonials } from "@/shared/components/testimonials";
import {
  wartegHero,
  wartegMenuItems,
  wartegOperatingHours,
  wartegTestimonials,
} from "@/app/constants/warteg";
import {
  GOOGLE_MAPS_EMBED_URL,
  WARTEG_CATERING_URL,
  WARTEG_ORDER_URL,
  WARTEG_MAPS_URL,
  WARTEG_MAPS_EMBED_URL,
} from "@/app/constants/links";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function WartegClientPage() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = false;

  useEffect(() => {
    const checkTime = () => {
      const jakartaTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }),
      );
      const hour = jakartaTime.getHours();
      setIsOpen(
        hour >= wartegOperatingHours.openHour && hour < wartegOperatingHours.closeHour,
      );
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const specials = wartegMenuItems.filter((item) => item.isSpecialToday);
  const regularMenu = wartegMenuItems.filter((item) => !item.isSpecialToday);

  return (
    <div className="pb-24">
      <PageHero
        title="Warteg Modern"
        subtitle="Authentic local flavors elevated with premium ingredients and impeccable hygiene."
        imageSrc={wartegHero.imageSrc}
      />

      <section className="border-y border-border/50 bg-card py-4 md:py-6 relative z-20 -mt-10 mx-4 md:mx-auto max-w-5xl rounded-2xl shadow-xl">
        <div className="px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-3 h-3 rounded-full ${
                isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-500"
              }`}
            />
            <div>
              <p className="font-bold text-foreground">
                {isOpen ? "OPEN NOW" : "CLOSED"}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {wartegOperatingHours.label}
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-border hidden md:block" />

          <a
            href={WARTEG_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors text-muted-foreground text-sm md:text-base"
          >
            <MapPin className="w-4 h-4 md:w-5 md:h-5" /> Get Directions
          </a>

          <div className="h-10 w-px bg-border hidden md:block" />

          <a
            href={WARTEG_CATERING_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto text-center px-6 py-2 bg-foreground text-background font-semibold rounded-lg hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Order Catering
          </a>
        </div>
      </section>

      {!isLoading && specials.length > 0 && (
        <section className="py-12 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-gold" />
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Chef&#39;s Specials
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specials.map((item) => (
                <div
                  key={item.id}
                  className="glass-panel-gold rounded-2xl p-1 relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-4 bg-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                    SPECIAL
                  </div>
                  <div className="bg-card rounded-xl p-6 h-full flex flex-col">
                    <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform origin-bottom-left">
                      {item.emoji}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="text-xl font-bold text-gold">
                      {formatCurrency(item.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mt-4 md:mt-6 py-12 md:py-16 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 md:mb-12 text-center">
            Regular Menu
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-32 bg-background rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {regularMenu.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <div className="text-3xl md:text-4xl bg-muted rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-sm md:text-base text-foreground truncate">
                        {item.name}
                      </h4>
                      <span className="font-semibold text-sm text-gold shrink-0">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Temukan Kami
          </h2>
        </div>
        <div className="w-full h-[300px] md:h-[400px]">
          <iframe
            src={WARTEG_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">
            Ulasan Pelanggan
          </h2>
          <Testimonials items={wartegTestimonials} />
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-sm border-t border-border/50 md:hidden pb-safe">
        <a
          href={WARTEG_ORDER_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl text-sm"
        >
          🍽️ Pesan Sekarang via WhatsApp
        </a>
      </div>
    </div>
  );
}
