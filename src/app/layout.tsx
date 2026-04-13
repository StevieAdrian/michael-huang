import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { seoConfig, generateOGMetadata, generateTwitterMetadata } from "@/config/seo-config";
import { generateOrganizationSchema, generateWebsiteSchema, generatePersonSchema } from "@/lib/structured-data";
import { StructuredData } from "@/shared/components/StructuredData";
import { Navbar } from "@/shared/components/navbar";
import { Footer } from "@/shared/components/footer";
import { WhatsAppButton } from "@/shared/components/whatsapp-button";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
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

  // Verification
  verification: {
    google: seoConfig.verification.google,
  },

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

  // Icons
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },

  // Canonical URL (will be overridden on child pages as needed)
  alternates: {
    canonical: seoConfig.siteUrl,
    languages: {
      "id-ID": seoConfig.siteUrl,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: seoConfig.siteName,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${seoConfig.gtmId}');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Structured Data - Organization Schema */}
        <StructuredData data={generateOrganizationSchema()} />
        {/* Structured Data - Website Schema */}
        <StructuredData data={generateWebsiteSchema()} />
        {/* Structured Data - Person Schema */}
        <StructuredData data={generatePersonSchema()} />
        
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${seoConfig.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
