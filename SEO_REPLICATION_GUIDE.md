# Blueprint & Checklist: Replikasi Konfigurasi SEO Next.js (App Router)

Panduan praktis dan template modular untuk mereplikasi seluruh arsitektur SEO dari proyek ini ke proyek Next.js (App Router) lainnya.

---

## 📋 Daftar Isi
1. [Arsitektur File SEO](#1-arsitektur-file-seo)
2. [Langkah 1: Central SEO Config (`src/config/seo.config.ts`)](#langkah-1-central-seo-config)
3. [Langkah 2: Structured Data (Schema.org / JSON-LD)](#langkah-2-structured-data-schemaorg--json-ld)
4. [Langkah 3: Root Layout & Metadata Global (`src/app/layout.tsx`)](#langkah-3-root-layout--metadata-global)
5. [Langkah 4: Pola Metadata & Canonical Per-Halaman](#langkah-4-pola-metadata--canonical-per-halaman)
6. [Langkah 5: Dynamic XML Sitemap (`src/app/sitemap.ts`)](#langkah-5-dynamic-xml-sitemap)
7. [Langkah 6: Robots.txt & AI Search / GEO (`public/robots.txt` & `public/llms.txt`)](#langkah-6-robotstxt--ai-search--geo)
8. [Langkah 7: Server & Performance Tuning (`next.config.ts`)](#langkah-7-server--performance-tuning)
9. [Langkah 8: Komponen Pendukung SEO (Image & Link)](#langkah-8-komponen-pendukung-seo)
10. [✅ Master Checklist Replikasi Proyek Baru](#-master-checklist-replikasi-proyek-baru)

---

## 1. Arsitektur File SEO

Struktur direktori standar yang disiapkan pada proyek target:

```text
├── public/
│   ├── robots.txt              # Aturan crawler Google, Bing & AI
│   ├── llms.txt                # Generative Engine Optimization (GEO) untuk AI LLM
│   ├── manifest.json           # Web app manifest
│   └── og-image.png            # Default Open Graph social image (1200x630)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Metadata dasar, GTM, JSON-LD global
│   │   ├── sitemap.ts          # Generator sitemap.xml otomatis
│   │   └── [slug]/page.tsx     # Pola canonical & structured data per halaman
│   ├── config/
│   │   └── seo.config.ts       # Pusat konfigurasi URL, nama, keywords, verification
│   ├── lib/
│   │   └── structured-data.ts  # Generator JSON-LD Schema.org
│   └── shared/
│       └── components/
│           ├── StructuredData.tsx # Wrapper render JSON-LD script
│           ├── SEOImage.tsx       # Next/Image wrapper dengan best practices
│           └── SEOLink.tsx        # Internal & external link helper
└── next.config.ts              # Redirect 301, headers, cache & optimasi format gambar
```

---

## Langkah 1: Central SEO Config

Buat file `src/config/seo.config.ts` untuk menghindari duplikasi nilai hardcode:

```typescript
// src/config/seo.config.ts

export const seoConfig = {
  siteName: "Nama Brand / Bisnis Anda",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.domainanda.com",
  description:
    "Deskripsi ringkas dan kaya kata kunci mengenai layanan atau produk Anda (150-160 karakter).",

  social: {
    twitter: "@username_twitter",
    linkedIn: "https://www.linkedin.com/company/nama-perusahaan",
    facebook: "https://facebook.com/nama-halaman",
    youtube: "https://www.youtube.com/@channel-anda",
    instagram: "https://instagram.com/username-anda",
  },

  author: {
    name: "Nama Brand atau Founder",
    email: "contact@domainanda.com",
    phone: "+62-811-XXXX-XXXX",
  },

  // Review aggregate (jika ada data Google Review)
  reviewData: {
    ratingValue: "5.0",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },

  // Alamat fisik untuk LocalBusiness / ProfessionalService Schema
  address: {
    street: "Jl. Alamat Lengkap No. XX",
    city: "Jakarta Barat",
    region: "DKI Jakarta",
    postalCode: "11730",
    country: "ID",
    latitude: -6.1389,
    longitude: 106.7306,
  },

  // Target keyword utama untuk strategi on-page
  primaryKeywords: [
    "Kata Kunci Utama 1",
    "Jasa Layanan Jakarta",
    "Brand Terbaik Indonesia",
  ] as const,

  // Search Engine Verification Tokens
  verification: {
    google: "MASUKKAN_GOOGLE_SEARCH_CONSOLE_CODE_DISINI",
    bing: "MASUKKAN_BING_VERIFICATION_CODE_JIKA_ADA",
  },

  // Tracking Container
  gtmId: "GTM-XXXXXXX",
} as const;

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

export function generateTwitterMetadata(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    creator: seoConfig.social.twitter,
  };
}
```

---

## Langkah 2: Structured Data (Schema.org / JSON-LD)

### A. Buat Component Render Script (`src/shared/components/StructuredData.tsx`)

```tsx
// src/shared/components/StructuredData.tsx

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### B. Buat Generator Schema (`src/lib/structured-data.ts`)

```typescript
// src/lib/structured-data.ts
import { seoConfig } from "@/config/seo.config";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    description: seoConfig.description,
    sameAs: Object.values(seoConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: seoConfig.author.phone,
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
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Atau ProfessionalService / Restaurant / dll.
    "@id": `${seoConfig.siteUrl}/#business`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    telephone: seoConfig.author.phone,
    email: seoConfig.author.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.address.street,
      addressLocality: seoConfig.address.city,
      addressRegion: seoConfig.address.region,
      postalCode: seoConfig.address.postalCode,
      addressCountry: seoConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.address.latitude,
      longitude: seoConfig.address.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.reviewData.ratingValue,
      reviewCount: seoConfig.reviewData.reviewCount,
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

export function generateFAQSchema(
  faqs: Array<{ q: string; a: string }>,
  pageUrl: string = seoConfig.siteUrl
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
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

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  publishedDate: string;
  modifiedDate?: string;
  authorName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || `${seoConfig.siteUrl}/og-image.png`,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      "@type": "Person",
      name: article.authorName || seoConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
```

---

## Langkah 3: Root Layout & Metadata Global (`src/app/layout.tsx`)

> **PENTING: Jangan pasang `alternates.canonical` di root layout!**  
> Di Next.js App Router, metadata di root layout diwariskan ke semua child page. Jika canonical dipasang di root layout tanpa di-override per halaman, semua halaman dalam website Anda berisiko dikanonikalakan ke homepage oleh Google bot.

```tsx
// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { seoConfig, generateOGMetadata, generateTwitterMetadata } from "@/config/seo.config";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${seoConfig.siteName}`,
    default: seoConfig.siteName,
  },
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.siteUrl),

  // Open Graph & Twitter Card Default
  openGraph: generateOGMetadata(seoConfig.siteName, seoConfig.description),
  twitter: generateTwitterMetadata(seoConfig.siteName, seoConfig.description),

  // Search Engine & Crawler Control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  keywords: [...seoConfig.primaryKeywords],
  authors: [{ name: seoConfig.author.name, url: seoConfig.siteUrl }],
  creator: seoConfig.author.name,

  // Verifikasi Webmaster
  verification: {
    google: seoConfig.verification.google,
  },

  // Icons & PWA
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Google Tag Manager (Script) */}
        {seoConfig.gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${seoConfig.gtmId}');`,
            }}
          />
        )}

        {/* Global JSON-LD Schema */}
        <StructuredData data={generateOrganizationSchema()} />
        <StructuredData data={generateWebsiteSchema()} />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {/* Google Tag Manager (NoScript fallback) */}
        {seoConfig.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${seoConfig.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

---

## Langkah 4: Pola Metadata & Canonical Per-Halaman

Setiap halaman sub-rute **wajib** mendefinisikan metadata spesifik dan canonical URL mandiri:

```tsx
// src/app/layanan/page.tsx
import type { Metadata } from "next";
import { seoConfig, generateOGMetadata } from "@/config/seo.config";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

export const metadata: Metadata = {
  title: "Jasa Konsultasi Bisnis Terbaik di Jakarta",
  description:
    "Layanan konsultasi bisnis dan legal profesional dari praktisi berpengalaman.",
  keywords: ["konsultasi bisnis", "jasa legal jakarta", "pendirian pt"],
  alternates: {
    canonical: `${seoConfig.siteUrl}/layanan`, // Wajib ada untuk cegah duplikasi konten
  },
  openGraph: generateOGMetadata(
    "Jasa Konsultasi Bisnis Terbaik di Jakarta",
    "Layanan konsultasi bisnis dan legal profesional.",
    `${seoConfig.siteUrl}/images/layanan-og.png`,
    `${seoConfig.siteUrl}/layanan`
  ),
};

export default function ServicePage() {
  const faqs = [
    { q: "Berapa lama proses pengerjaan?", a: "Umumnya 1-2 minggu kerja." },
    { q: "Apakah ada garansi layanan?", a: "Ya, kami menjamin kepatuhan legalitas 100%." },
  ];

  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Beranda", url: `${seoConfig.siteUrl}/` },
          { name: "Layanan", url: `${seoConfig.siteUrl}/layanan` },
        ])}
      />
      <StructuredData data={generateFAQSchema(faqs, `${seoConfig.siteUrl}/layanan`)} />
      
      {/* Konten Halaman */}
      <h1>Layanan Kami</h1>
    </>
  );
}
```

---

## Langkah 5: Dynamic XML Sitemap (`src/app/sitemap.ts`)

Next.js App Router secara otomatis melayani output file ini pada endpoint `/sitemap.xml`:

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = seoConfig.siteUrl;

  // 1. Rute Statis
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // 2. Rute Dinamis (Contoh Artikel Blog dari Database / API / Constants)
  // Ganti dummy berikut dengan fetch data sesungguhnya
  const articles = [
    { slug: "panduan-memulai-bisnis", updatedAt: "2026-10-01" },
    { slug: "cara-urus-legalitas-pt", updatedAt: "2026-10-15" },
  ];

  const dynamicArticleRoutes: MetadataRoute.Sitemap = articles.map((item) => ({
    url: `${baseUrl}/artikel/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicArticleRoutes];
}
```

---

## Langkah 6: Robots.txt & AI Search / GEO

### A. `public/robots.txt`
Simpan di `public/robots.txt`. File ini mengizinkan Googlebot, Bingbot, dan seluruh bot AI LLM modern (ChatGPT, Claude, Perplexity, Gemini) agar website dapat direkomendasikan oleh mesin pencari berbasis AI:

```txt
# Sitemap
Sitemap: https://www.domainanda.com/sitemap.xml

# Traditional Search Engines
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: *
Allow: /

# AI Crawlers (Generative Engine Optimization - GEO)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /
```

### B. `public/llms.txt` (Standar AI Discovery)
Simpan di `public/llms.txt` sebagai rangkuman terstruktur yang dapat dibaca cepat oleh sistem LLM:

```markdown
# Nama Brand / Perusahaan Anda

> Markdown mirrors available at: https://www.domainanda.com/markdown/

## About
Deskripsi lengkap mengenai bisnis, sejarah, dan nilai jual utama.

## Core Services & Products
- Layanan 1: Penjelasan singkat fitur dan benefit.
- Layanan 2: Detail alur kerja dan estimasi waktu.

## Location & Contact
- Alamat: Alamat kantor resmi
- WhatsApp/Telepon: +62-811-XXXX-XXXX
- Email: contact@domainanda.com
- Website: https://www.domainanda.com

## Key Facts
- Beroperasi resmi sejak tahun XXXX
- Rating 5.0 bintang dari ratusan review pelanggan

## Frequently Asked Questions
### Bagaimana cara order layanan?
Hubungi via WhatsApp resmi kami...
```

---

## Langkah 7: Server & Performance Tuning (`next.config.ts`)

Atur redirect kanonikal (non-www ke www), caching header 1 tahun untuk static assets, dan kompresi modern (AVIF/WebP):

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  generateEtags: true,

  // Optimasi format gambar generasi terbaru
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Headers untuk Keamanan & Caching SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Caching 1 Tahun untuk Asset Statis & Gambar
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redirects 301 untuk URL Canonical & Pemindahan Slug
  async redirects() {
    return [
      // Enforce www subdomain jika canonical menggunakan www
      {
        source: "/:path*",
        has: [{ type: "host", value: "domainanda.com" }],
        destination: "https://www.domainanda.com/:path*",
        permanent: true,
      },
      // Contoh alias URL pendek ke target SEO pilar
      {
        source: "/layanan-kami",
        destination: "/layanan",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

---

## Langkah 8: Komponen Pendukung SEO

### A. SEO Image Component (`src/shared/components/SEOImage.tsx`)
Mencegah layout shift (CLS) dan memastikan tag `alt` selalu ada:

```tsx
// src/shared/components/SEOImage.tsx
import Image from "next/image";

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function SEOImage({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
  className,
}: SEOImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title || alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
```

### B. SEO Link Component (`src/shared/components/SEOLink.tsx`)
Otomatis menambahkan atribut `rel="noopener noreferrer"` untuk link luar:

```tsx
// src/shared/components/SEOLink.tsx
interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function ExternalLink({ href, children, title, className = "" }: ExternalLinkProps) {
  const titleAttr = title || (typeof children === "string" ? children : undefined);
  return (
    <a
      href={href}
      title={titleAttr}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
```

---

## ✅ Master Checklist Replikasi Proyek Baru

Gunakan checklist ini saat melakukan onboarding atau setup SEO pada proyek baru:

### Phase 1: Setup Dasar & File Config
- [ ] Buat file `src/config/seo.config.ts`.
- [ ] Isi `siteName`, `siteUrl`, `description`, nomor kontak, dan link sosial media.
- [ ] Daftarkan token `verification.google` dari Google Search Console.
- [ ] Daftarkan ID `gtmId` Google Tag Manager jika menggunakan tracking.

### Phase 2: Metadata & Layout
- [ ] Pasang metadata default di `src/app/layout.tsx` (title template, description, OpenGraph, Twitter Card).
- [ ] Pastikan bot directive `robots: { index: true, follow: true }` sudah aktif.
- [ ] **Pastikan `alternates.canonical` TIDAK dipasang di root layout.**
- [ ] Pastikan `lang="id"` atau bahasa target sudah diset di tag `<html>`.
- [ ] Pastikan icon (`/favicon.ico`, `/apple-touch-icon.png`) dan `/manifest.json` tersedia di folder `public/`.

### Phase 3: Per-Page SEO & Canonical
- [ ] Setiap file `page.tsx` memiliki `export const metadata: Metadata`.
- [ ] Setiap file `page.tsx` menyematkan `alternates: { canonical: "https://..." }` spesifik halamannya.
- [ ] Panjang tag Title dipertahankan antara 50–60 karakter.
- [ ] Panjang Meta Description dipertahankan antara 150–160 karakter.
- [ ] Hanya ada **satu tag `<h1>`** per halaman.

### Phase 4: Structured Data (Schema.org)
- [ ] Buat helper `src/shared/components/StructuredData.tsx`.
- [ ] Buat `src/lib/structured-data.ts`.
- [ ] Sematkan schema global (`Organization`, `WebSite`) di `layout.tsx`.
- [ ] Sematkan schema spesifik (`LocalBusiness`, `FAQPage`, `BreadcrumbList`) di masing-masing landing page.
- [ ] Untuk halaman artikel/blog, sematkan schema `Article` dengan tanggal publish & author valid.

### Phase 5: Sitemap & Crawlers
- [ ] Buat file `src/app/sitemap.ts` (mengembalikan rute statis & dinamis).
- [ ] Buat file `public/robots.txt` (mengarah ke sitemap.xml & membuka izin bot AI).
- [ ] Buat file `public/llms.txt` untuk optimasi AI search (GEO).
- [ ] Sediakan gambar Open Graph default di `public/og-image.png` (ukuran pas 1200x630 pixel).

### Phase 6: Performa & Server (`next.config.ts`)
- [ ] Aktifkan `compress: true` dan format `formats: ["image/avif", "image/webp"]`.
- [ ] Pasang 301 Redirect untuk memaksakan domain kanonikal (non-www ke www atau sebaliknya).
- [ ] Pasang header caching `Cache-Control: public, max-age=31536000, immutable` untuk folder aset gambar.

### Phase 7: Verifikasi & Audit Pasca-Deploy
- [ ] **Google Rich Results Test**: Cek URL di [search.google.com/test/rich-results](https://search.google.com/test/rich-results) untuk memastikan JSON-LD valid bebas error.
- [ ] **Google Search Console**: Submit link `https://www.domainanda.com/sitemap.xml`.
- [ ] **OpenGraph Preview**: Cek tampilan share di media sosial melalui [opengraph.xyz](https://www.opengraph.xyz/).
- [ ] **PageSpeed Insights**: Pastikan nilai Core Web Vitals (LCP < 2.5s, CLS < 0.1) bernilai hijau.

