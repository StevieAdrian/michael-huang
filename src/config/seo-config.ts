/**
 * SEO Configuration & Constants
 * Central place for all SEO-related settings
 */

export const seoConfig = {
  // Site-wide information
  siteName: "Your Website Name",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com",
  description:
    "A compelling description of your website - this appears in search results",

  // Social Media
  social: {
    twitter: "@yourhandle",
    linkedIn: "https://linkedin.com/company/yourcompany",
    facebook: "https://facebook.com/yourpage",
  },

  // Author/Organization
  author: {
    name: "Your Name",
    email: "contact@example.com",
  },

  // JSON-LD Organization Schema
  organization: {
    name: "Your Company Name",
    logo: "https://yourwebsite.com/logo.png",
    url: "https://yourwebsite.com",
    sameAs: ["https://www.linkedin.com/company/yourcompany"],
  },

  // Keywords & Topics (for your content strategy)
  primaryKeywords: ["keyword1", "keyword2", "keyword3"] as const,

  // For structured data
  type: "Organization", // Organization, LocalBusiness, Product, etc.
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
