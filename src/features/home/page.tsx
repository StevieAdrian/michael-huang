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
        title="One Name, Every Solution"
        subtitle="The unified digital gateway for all Michael.com premium business units. Experience the gold standard across industries."
      />

      <ServicesSection />
      <ClientLogos />
      <SearchSection />
      <ReviewsSection />
      <LocationSection />
    </div>
  );
}
