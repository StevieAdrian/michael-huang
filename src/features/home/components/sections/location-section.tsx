"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_CONSULTATION_URL,
  EMAIL_ADDRESS,
  LOCATION_ADDRESS,
  GENERAL_MAPS_URL,
  GOOGLE_MAPS_EMBED_URL,
} from "@/app/constants/links";

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Info side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" /> Temukan Kami
            </div>
            <h2 className="text-2xl md:text-4xl font-display mb-4 md:mb-6">
               Kami berlokasi di jantung bisnis Jakarta. Kunjungi kami untuk
              konsultasi tatap muka, atau hubungi kami melalui WhatsApp untuk
              jadwal pertemuan
            </h2>
            {/*<p className="text-muted-foreground mb-8 leading-relaxed">
              Kami berlokasi di jantung bisnis Jakarta. Kunjungi kami untuk
              konsultasi tatap muka, atau hubungi kami melalui WhatsApp untuk
              jadwal pertemuan.
            </p>*/}

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Head Office
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {LOCATION_ADDRESS}
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
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                  >
                    +62 821 2385 595
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
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GENERAL_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all text-sm"
              >
                <MapPin className="w-4 h-4" /> Buka di Google Maps
              </a>
              <a
                href={WHATSAPP_CONSULTATION_URL}
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
              src={GOOGLE_MAPS_EMBED_URL}
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
  );
}
