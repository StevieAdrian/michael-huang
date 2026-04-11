/**
 * SEO Configuration & Constants
 * Central place for all SEO-related settings
 */

export const seoConfig = {
  // Site-wide information
  siteName: "Michael Huang ID",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://michaelhuang.id",
  description:
    "Official website of Michael Huang, expert in Notary, PPAT, and legal consulting services. Delivering trusted, efficient, and professional legal solutions, alongside social initiatives through Glory Ministry Church.",

  // Social Media
  social: {
    twitter: "@michaelhuang",
    linkedIn: "https://www.linkedin.com/in/michaelshstmkn/",
    facebook: "https://facebook.com/michaelhuangofficial",
    youtube: "https://www.youtube.com/@michaelhuangofficial2022"
  },

  // Author/Organization
  author: {
    name: "Michael Huang",
    email: "contact@michaelhuang.id",
  },

  // JSON-LD Organization Schema
  organization: {
    name: "Michael Huang",
    logo: "https://michaelhuang.id/logo.png",
    url: "https://michaelhuang.id",
    sameAs: [
      "https://facebook.com/michaelhuangofficial",
      "https://www.youtube.com/@michaelhuangofficial2022"
    ],
  },

  // Keywords & Topics (for your content strategy)
  primaryKeywords: [
    "Michael Huang",
    "Glory Ministry Church",
    "Legal Consultant Jakarta",
    "Notaris Jakarta Barat",
    "PPAT Jakarta",
    "Pengacara Jakarta",
    "Law Firm Jakarta",
    "Law Consulting Jakarta",
    "Warteg Gemini",
    "Kos Gemini",
    "Kos Jakarta",
    "Kos Jakarta Barat",
    "Kos Terbaik Jakarta Barat",
    "Kos Taman Palem",
    "Warteg Taman Palem",
    "Warteg Enak Jakarta",
    "Jasa Notaris Jakarta Barat",
    "Notaris Online Terdekat",
    "PPAT Jakarta Barat",
    "Balik Nama Sertifikat",
    "Akta Jual Beli Tanah",
    "Christian Ministry",
    "Michael Huang Podcast"
  ] as const,

  // Verification codes
  verification: {
    google: "iyBFpyUPLalkQuyv8chODEcQTA2eWa-gZcV1Hph5UVc",
  },

  // Tag Manager
  gtmId: "GTM-5FKJ4C6J",

  // For structured data
  type: "Person", // The main website is a personal brand/hub
} as const;

/**
 * Generate Open Graph metadata
 */
export function generateOGMetadata(
  title: string,
  description: string,
  image?: string,
  url?: string
) {
  return {
    title,
    description,
    url: url || seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    images: [
      {
        url: image || `${seoConfig.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "website" as const,
  };
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterMetadata(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    creator: seoConfig.social.twitter,
  };
}
