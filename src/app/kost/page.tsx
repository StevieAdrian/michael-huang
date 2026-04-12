import type { Metadata } from "next";
import { KostClientPage } from "./kost-client";
import { seoConfig, generateOGMetadata } from "@/config/seo-config";
import { generateLodgingSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Kost Premium Jakarta Barat | Gemini Kost",
  description:
    "Kost nyaman dan strategis di Jakarta Barat (Taman Palem). Kamar modern, fasilitas lengkap, lingkungan aman. Hubungi Michael Huang untuk info kost terbaik.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/kost-gemini-koolkost`,
  },
  openGraph: generateOGMetadata(
    "Kost Premium Jakarta Barat | Gemini Kost",
    "Kost nyaman dan strategis di Jakarta Barat. Kamar modern, fasilitas lengkap, lingkungan aman.",
    `${seoConfig.siteUrl}/og-image.png`,
    `${seoConfig.siteUrl}/kost-gemini-koolkost`
  ),
};

export default function KostPage() {
  return (
    <>
      <StructuredData data={generateLodgingSchema()} />
      <KostClientPage />
    </>
  );
}
