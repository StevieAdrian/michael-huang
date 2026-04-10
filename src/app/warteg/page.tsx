import type { Metadata } from "next";
import { WartegClientPage } from "./warteg-client";
import { seoConfig, generateOGMetadata } from "@/config/seo-config";
import { generateFoodEstablishmentSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Warteg Gemini Jakarta | Rasa Premium Harga Terjangkau",
  description:
    "Nikmati hidangan khas Warteg Gemini dengan rasa premium dan kualitas terjamin. Tersedia layanan catering untuk kantah, kantor, dan acara spesial di Jakarta Barat.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/warteg`,
  },
  openGraph: generateOGMetadata(
    "Warteg Gemini Jakarta | Rasa Premium Harga Terjangkau",
    "Nikmati hidangan khas Warteg Gemini dengan rasa premium dan kualitas terjamin. Layanan catering tersedia.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/warteg`
  ),
};

export default function WartegPage() {
  return (
    <>
      <StructuredData data={generateFoodEstablishmentSchema()} />
      <WartegClientPage />
    </>
  );
}
