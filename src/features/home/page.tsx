import { PageHero } from "@/features/home/components/page-hero";
import { ClientLogos } from "@/features/home/components/client-logos";
import { ServicesSection } from "@/features/home/components/sections/services-section";
import { SearchSection } from "@/features/home/components/sections/search-section";
import { ReviewsSection } from "@/features/home/components/sections/reviews-section";
import { LocationSection } from "@/features/home/components/sections/location-section";
import { StructuredData } from "@/shared/components/StructuredData";
import {
  generateComprehensiveBusinessSchema,
  generateAttorneySchema,
  generateNotarySchema,
  generateRestaurantSchema,
  generateHomepageFAQSchema,
  generateServiceListSchema,
} from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      {/* Comprehensive JSON-LD Structured Data for Homepage */}
      <StructuredData data={generateComprehensiveBusinessSchema()} />
      <StructuredData data={generateAttorneySchema()} />
      <StructuredData data={generateNotarySchema()} />
      <StructuredData data={generateRestaurantSchema()} />
      <StructuredData data={generateHomepageFAQSchema()} />
      <StructuredData data={generateServiceListSchema()} />

      <div className="pb-24">
        <PageHero
          title="Michael Huang | Law "
          subtitle="Ekosistem layanan hukum, hunian, kuliner, dan peluang bisnis terpadu di Jakarta Barat."
        />

        <ServicesSection />
        <ClientLogos />
        {/* <SearchSection /> */}
        <ReviewsSection />
        <LocationSection />
      </div>
    </>
  );
}
