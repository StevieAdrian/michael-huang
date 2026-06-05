/**
 * SEO Configuration & Constants
 * Central place for all SEO-related settings
 */

export const seoConfig = {
  // Site-wide information
  siteName: "Notaris, PPAT, Law Firm & Consulting di Jakarta | Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.michaelhuang.id",
  description:
    "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D. - Notaris, PPAT & Law Firm di Jakarta Barat. Layanan hukum korporat, pendirian PT/PMA, transaksi properti, franchise warteg & kost premium.",

  // Social Media
  social: {
    twitter: "@michaelhuang",
    linkedIn: "https://www.linkedin.com/in/michaelshstmkn/",
    facebook: "https://facebook.com/michaelhuangofficial",
    youtube: "https://www.youtube.com/@michaelhuangofficial2022"
  },

  // Author/Organization
  author: {
    name: "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
    email: "contact@michaelhuang.id",
  },

  // Review & Rating Data
  reviewData: {
    ratingValue: "5.0",
    reviewCount: "691",
    bestRating: "5",
    worstRating: "1",
  },

  // JSON-LD Organization Schema
  organization: {
    name: "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
    logo: "https://www.michaelhuang.id/images/logo-mich.ico",
    url: "https://www.michaelhuang.id",
    sameAs: [
      "https://facebook.com/michaelhuangofficial",
      "https://www.youtube.com/@michaelhuangofficial2022"
    ],
  },

  // Keywords & Topics (for your content strategy)
  primaryKeywords: [
    "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D.",
    "Glory Ministry Church",
    "Legal Consultant Jakarta",
    "Notaris Jakarta Barat",
    "PPAT Jakarta",
    "Pengacara Jakarta",
    "Law Firm Jakarta",
    "Law Consulting Jakarta",
    "Franchise Warteg",
    "Peluang Bisnis Franchise",
    "Kemitraan Warteg Gemini",
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
    "Dr. Michael, S.H., S.T., M.Kn., M.Th., Ph.D. Podcast"
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
