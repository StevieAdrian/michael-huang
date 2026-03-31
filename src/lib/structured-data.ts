/**
 * JSON-LD Structured Data Schemas
 * For rich snippets in search results
 */

import { seoConfig } from "@/config/seo-config";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    description: seoConfig.description,
    sameAs: seoConfig.organization.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: seoConfig.author.email,
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(metadata: {
  title: string;
  description: string;
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    image: metadata.image || `${seoConfig.siteUrl}/og-image.png`,
    datePublished: metadata.publishedDate || new Date().toISOString(),
    dateModified: metadata.modifiedDate || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: metadata.author || seoConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.organization.name,
      logo: {
        "@type": "ImageObject",
        url: seoConfig.organization.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": metadata.url,
    },
  };
}

export function generateLocalBusinessSchema(metadata: {
  name: string;
  address: string;
  phone: string;
  openingHours?: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: metadata.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: metadata.address,
    },
    telephone: metadata.phone,
    openingHoursSpecification: metadata.openingHours,
    image: metadata.image,
    url: seoConfig.siteUrl,
  };
}
