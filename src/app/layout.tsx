import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoConfig, generateOGMetadata, generateTwitterMetadata } from "@/config/seo-config";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${seoConfig.siteName}`,
    default: seoConfig.siteName,
  },
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.siteUrl),

  // Open Graph (Social Media)
  openGraph: generateOGMetadata(
    seoConfig.siteName,
    seoConfig.description
  ),

  // Twitter Card
  twitter: generateTwitterMetadata(
    seoConfig.siteName,
    seoConfig.description
  ),

  // Additional SEO metadata
  keywords: [...seoConfig.primaryKeywords],
  authors: [{ name: seoConfig.author.name, url: seoConfig.siteUrl }],
  creator: seoConfig.author.name,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },

  // Verification (add your verification codes here)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-code",
  // },

  // Robots
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

  // Mobile & Responsive
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },

  // Canonical URL (will be overridden on child pages as needed)
  alternates: {
    canonical: seoConfig.siteUrl,
    languages: {
      "en-US": seoConfig.siteUrl,
      // Add more languages as needed
      // "es-ES": `${seoConfig.siteUrl}/es`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data - Organization Schema */}
        <StructuredData data={generateOrganizationSchema()} />
        {/* Structured Data - Website Schema */}
        <StructuredData data={generateWebsiteSchema()} />
        
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Search Console verification */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
