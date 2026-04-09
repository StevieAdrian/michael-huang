import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import {
  legalNavItems,
  footerNavItems as otherNavItems,
} from "@/shared/constants/nav";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto relative overflow-hidden">
      {/* Subtle gold glow at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-sm bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                M
              </div>
              <span className="font-display font-bold text-lg tracking-widest">
                MICHAEL<span className="text-gold">.HUANG</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm text-sm">
              Satu nama, semua solusi. Ekosistem digital premium yang menyatukan layanan hukum, bisnis, hunian, kuliner, ibadah, musik, dan podcast.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground text-sm">
              Layanan Hukum
            </h4>
            <ul className="space-y-2 mb-6">
              {legalNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold mb-4 text-foreground text-sm">
              Layanan Lainnya
            </h4>
            <ul className="space-y-2">
              {otherNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground text-sm">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                +62 812 2179 370
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gold shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                info@michael.com
              </li>
              <li className="flex items-start gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Michael.Huang Ecosystem. Hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
