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

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seoConfig.author.name,
    url: seoConfig.siteUrl,
    jobTitle: "Notaris, PPAT, Legal Consultant",
    sameAs: seoConfig.organization.sameAs,
    email: seoConfig.author.email,
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
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
  url?: string;
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
    url: metadata.url || seoConfig.siteUrl,
  };
}

export function generateComprehensiveBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: "Michael Huang",
    alternateName: "Michael Huang Building",
    description: "Integrated business ecosystem providing legal services (Law Firm, Notaris, PPAT, Legal Consulting), premium boarding house, authentic Indonesian restaurant, church ministry, music production, and franchise opportunities in Jakarta.",
    url: seoConfig.siteUrl,
    telephone: "+62-821-2385-595",
    email: "contact@michaelhuang.id",
    priceRange: "$$",
    image: `${seoConfig.siteUrl}/logo.png`,
    logo: `${seoConfig.siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko Mutiara Taman Palem Blok C8 No 23-26, Cengkareng Timur",
      addressLocality: "Jakarta Barat",
      addressRegion: "DKI Jakarta",
      postalCode: "11730",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.13891866018095,
      longitude: 106.73066707400585
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.reviewData.ratingValue,
      reviewCount: seoConfig.reviewData.reviewCount,
      bestRating: seoConfig.reviewData.bestRating,
      worstRating: seoConfig.reviewData.worstRating
    },
    sameAs: [
      "https://facebook.com/michaelhuangofficial",
      "https://www.youtube.com/@michaelhuangofficial2022",
      "https://www.linkedin.com/in/michaelshstmkn/"
    ],
    founder: {
      "@type": "Person",
      name: "Michael Huang",
      jobTitle: "Notaris, PPAT, Legal Consultant",
      honorificSuffix: "S.H., S.T., M.Kn."
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal and Business Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Legal Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Law Firm Services",
                description: "Corporate litigation, strategic legal advisory, business dispute resolution"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Notaris Services",
                description: "Company formation (PT, CV, PMA), deed authentication, power of attorney"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PPAT Services",
                description: "Property sale-purchase deeds, mortgage deeds, land certificate verification"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Legal Consulting",
                description: "Corporate law, M&A due diligence, contract drafting, business licensing"
              }
            }
          ]
        }
      ]
    },
    areaServed: {
      "@type": "City",
      name: "Jakarta"
    }
  };
}

export function generateAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${seoConfig.siteUrl}/law-firm-michael#attorney`,
    name: "Michael, Antonius & Co Law Firm",
    description: "Professional law firm providing corporate litigation, legal advisory, and business dispute resolution services in Jakarta.",
    url: `${seoConfig.siteUrl}/law-firm-michael`,
    telephone: "+62-821-2385-595",
    email: "contact@michaelhuang.id",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taman Palem Lestari",
      addressLocality: "Jakarta Barat",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.136249860156894,
      longitude: 106.72863377400589
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.reviewData.ratingValue,
      reviewCount: seoConfig.reviewData.reviewCount,
    },
    areaServed: {
      "@type": "City",
      name: "Jakarta"
    }
  };
}

export function generateNotarySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Notary",
    "@id": `${seoConfig.siteUrl}/notaris-michael#notary`,
    name: "Michael Huang - Notaris & PPAT",
    alternateName: "Michael, S.H., S.T., M.Kn.",
    description: "Licensed Notaris and PPAT providing authentic legal documents including company formation, property deeds, and legal authentication services.",
    url: `${seoConfig.siteUrl}/notaris-michael`,
    telephone: "+62-821-2385-595",
    email: "contact@michaelhuang.id",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko Mutiara Taman Palem Blok C8 No 23-26",
      addressLocality: "Jakarta Barat",
      addressRegion: "DKI Jakarta",
      postalCode: "11730",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.13891866018095,
      longitude: 106.73066707400585
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.reviewData.ratingValue,
      reviewCount: seoConfig.reviewData.reviewCount
    },
    areaServed: {
      "@type": "City",
      name: "Jakarta"
    }
  };
}

export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${seoConfig.siteUrl}/warteg-gemini#restaurant`,
    name: "Warteg Gemini",
    description: "Authentic Indonesian local cuisine (warteg) with premium ingredients and modern presentation. Catering services available.",
    url: `${seoConfig.siteUrl}/warteg-gemini`,
    telephone: "+62-821-2385-595",
    email: "contact@michaelhuang.id",
    priceRange: "$",
    servesCuisine: "Indonesian",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taman Palem Lestari",
      addressLocality: "Jakarta Barat",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.136249860156894,
      longitude: 106.72863377400589
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.reviewData.ratingValue,
      reviewCount: seoConfig.reviewData.reviewCount
    }
  };
}

export function generateLegalServiceSchema(metadata: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: metadata.name,
    description: metadata.description,
    url: metadata.url,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taman Palem Lestari",
      addressLocality: "Jakarta Barat",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
  };
}

export function generateChurchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Glory Ministry Church",
    url: `${seoConfig.siteUrl}/glory-ministry-church`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taman Palem Lestari",
      addressLocality: "Jakarta Barat",
    },
  };
}

export function generateFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${seoConfig.siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateHomepageFAQSchema() {
  const topFaqs = [
    {
      q: "Layanan hukum apa saja yang Anda sediakan?",
      a: "Kami menyediakan layanan Law Firm (litigasi korporat, advisory strategis), Notaris (pendirian PT/CV/PMA, akta autentik), PPAT (akta jual beli properti, APHT, balik nama sertifikat), dan Legal Consulting (M&A due diligence, kontrak bisnis, perizinan OSS, compliance BKPM/OJK). Tersedia paket fixed-fee untuk startup dan retainer bulanan untuk korporasi."
    },
    {
      q: "Berapa lama proses pendirian PT?",
      a: "Pendirian PT (Perseroan Terbatas) memakan waktu 2-4 minggu, mencakup pembuatan Akta Pendirian di Notaris, pengesahan Kemenkumham, dan pengurusan NIB melalui sistem OSS untuk izin operasional dan NPWP perusahaan."
    },
    {
      q: "Berapa lama pembuatan Akta Jual Beli properti?",
      a: "Akta Jual Beli (AJB) dapat diselesaikan dalam 1-3 hari kerja setelah dokumen kedua belah pihak lengkap dan terverifikasi. Proses balik nama di BPN kini lebih cepat dengan sistem percepatan layanan terbaru."
    },
    {
      q: "Apakah Warteg Gemini menyediakan catering?",
      a: "Ya, Warteg Gemini menyediakan layanan catering untuk acara dan pesanan korporat. Kami menggunakan bahan premium dengan cita rasa autentik Indonesia dan presentasi modern."
    },
    {
      q: "Apa saja fasilitas di Kost Gemini dan KoolKost?",
      a: "Kedua lokasi kost premium kami menyediakan kamar modern, fasilitas lengkap, lingkungan aman dengan CCTV 24 jam di area publik, dan lokasi strategis di Jakarta Barat dekat Taman Palem dan Universitas Mercu Buana."
    },
    {
      q: "Bagaimana cara bergabung dengan franchise Warteg Gemini?",
      a: "Hubungi kami via WhatsApp di +62 821 2385 595 untuk informasi peluang kemitraan franchise. Kami menyediakan sistem bisnis teruji, training operasional, dan dokumentasi legal lengkap sesuai regulasi waralaba Indonesia."
    },
    {
      q: "Apakah Michael Huang adalah Notaris dan PPAT resmi?",
      a: "Ya, Michael Huang (S.H., S.T., M.Kn.) adalah Notaris dan PPAT resmi berlisensi di Indonesia, berwenang membuat dokumen autentik seperti akta perusahaan, akta jual beli properti, dan dokumen legal lainnya."
    },
    {
      q: "Dimana lokasi kantor Michael Huang?",
      a: "Kantor pusat kami berlokasi di Michael Huang Building, Ruko Mutiara Taman Palem Blok C8 No 23-26, Cengkareng Timur, Jakarta Barat 11730. Hubungi +62 821 2385 595 untuk jadwal konsultasi."
    }
  ];

  return generateFAQSchema(topFaqs);
}

export function generateServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${seoConfig.siteUrl}/#services`,
    name: "Michael Huang Services",
    description: "Comprehensive business ecosystem services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/law-firm-michael#service`,
          name: "Law Firm Services",
          description: "Corporate litigation, strategic legal advisory, and business dispute resolution",
          provider: {
            "@type": "Attorney",
            name: "Michael, Antonius & Co Law Firm"
          },
          areaServed: "Jakarta",
          serviceType: "Legal Services"
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/notaris-michael#service`,
          name: "Notaris Services",
          description: "Company formation documents, deed authentication, power of attorney, inheritance documents",
          provider: {
            "@type": "Notary",
            name: "Michael Huang - Notaris"
          },
          areaServed: "Jakarta",
          serviceType: "Notary Services"
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/ppat-michael#service`,
          name: "PPAT Services",
          description: "Property sale-purchase deeds, mortgage deeds, land certificate verification, title transfer",
          provider: {
            "@type": "Notary",
            name: "Michael Huang - PPAT"
          },
          areaServed: "Jakarta",
          serviceType: "Land Deed Services"
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/law-consulting-michael#service`,
          name: "Legal Consulting",
          description: "Corporate law, M&A due diligence, contract drafting, business licensing, compliance",
          provider: {
            "@type": "ProfessionalService",
            name: "Michael Huang Legal Consulting"
          },
          areaServed: "Jakarta",
          serviceType: "Legal Consulting"
        }
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/warteg-gemini#service`,
          name: "Warteg Gemini Restaurant & Catering",
          description: "Authentic Indonesian cuisine with premium ingredients, catering services available",
          provider: {
            "@type": "Restaurant",
            name: "Warteg Gemini"
          },
          areaServed: "Jakarta",
          serviceType: "Restaurant & Catering"
        }
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/kost-gemini-koolkost#service`,
          name: "Premium Boarding House",
          description: "Modern rooms with complete facilities in strategic Jakarta locations",
          provider: {
            "@type": "LodgingBusiness",
            name: "Kost Gemini & KoolKost"
          },
          areaServed: "Jakarta",
          serviceType: "Accommodation"
        }
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          "@id": `${seoConfig.siteUrl}/franchise-michael#service`,
          name: "Franchise Opportunities",
          description: "Business partnership opportunities with proven systems and operational support",
          provider: {
            "@type": "Organization",
            name: "Michael Huang"
          },
          areaServed: "Indonesia",
          serviceType: "Franchise"
        }
      }
    ]
  };
}

export function generatePodcastSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Michael Huang Podcast",
    url: `${seoConfig.siteUrl}/podcast-michael`,
    description: "Obrolan mendalam tentang iman, bisnis, hukum, and kehidupan.",
    author: {
      "@type": "Person",
      name: "Michael Huang",
    },
  };
}

export function generateLodgingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Gemini Kost",
    url: `${seoConfig.siteUrl}/kost-gemini-koolkost`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taman Palem Lestari",
      addressLocality: "Jakarta Barat",
    },
    description: "Kost nyaman dan strategis di Jakarta Barat.",
  };
}

export function generateFoodEstablishmentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Warteg Gemini",
    url: `${seoConfig.siteUrl}/warteg-gemini`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taman Palem Lestari",
      addressLocality: "Jakarta Barat",
    },
    description: "Warteg dengan rasa premium dan harga terjangkau.",
  };
}

export function generateMusicGroupSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Glory Worship",
    url: `${seoConfig.siteUrl}/musik-production-michael`,
    description: "Layanan pujian dan penyembahan dari Glory Ministry Church.",
  };
}


