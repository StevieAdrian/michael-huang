"use client";

import { PageHero } from "@/features/home/components/page-hero";
import { ClientLogos } from "@/features/home/components/client-logos";
import { ServicesSection } from "@/features/home/components/sections/services-section";
import { SearchSection } from "@/features/home/components/sections/search-section";
import { ReviewsSection } from "@/features/home/components/sections/reviews-section";
import { LocationSection } from "@/features/home/components/sections/location-section";

export default function Home() {
  return (
    <div className="pb-24">
      <PageHero
        title="Satu Nama, Semua Solusi"
        subtitle="Pintu masuk digital terpadu untuk semua unit bisnis premium Michael.com. Standar terbaik di setiap layanan."
      />

      <ServicesSection />
      <ClientLogos />
      <SearchSection />
      <ReviewsSection />
      <LocationSection />
    </div>
  );
}
