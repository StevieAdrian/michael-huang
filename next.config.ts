import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */

  // Compression
  compress: true,

  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 60,
  },

  // Headers for SEO & Security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), microphone=(), camera=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
        ],
      },
      // Cache static assets for better performance
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache images
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects (use for URL changes to maintain SEO)
  async redirects() {
    return [
      {
        source: "/notaris/:path*",
        destination: "/notaris-michael/:path*",
        permanent: true,
      },
      {
        source: "/ppat/:path*",
        destination: "/ppat-michael/:path*",
        permanent: true,
      },
      {
        source: "/law-firm/:path*",
        destination: "/law-firm-michael/:path*",
        permanent: true,
      },
      {
        source: "/law-consulting/:path*",
        destination: "/law-consulting-michael/:path*",
        permanent: true,
      },
      {
        source: "/gereja/:path*",
        destination: "/glory-ministry-church/:path*",
        permanent: true,
      },
      {
        source: "/warteg/:path*",
        destination: "/warteg-gemini/:path*",
        permanent: true,
      },
      {
        source: "/kost/:path*",
        destination: "/kost-gemini-koolkost/:path*",
        permanent: true,
      },
      {
        source: "/podcast/:path*",
        destination: "/podcast-michael/:path*",
        permanent: true,
      },
      {
        source: "/music/:path*",
        destination: "/musik-production-michael/:path*",
        permanent: true,
      },
      {
        source: "/musik/:path*",
        destination: "/musik-production-michael/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/notaris-michael/:path*",
        destination: "/notaris/:path*",
      },
      {
        source: "/ppat-michael/:path*",
        destination: "/ppat/:path*",
      },
      {
        source: "/law-firm-michael/:path*",
        destination: "/law-firm/:path*",
      },
      {
        source: "/law-consulting-michael/:path*",
        destination: "/law-consulting/:path*",
      },
      {
        source: "/glory-ministry-church/:path*",
        destination: "/gereja/:path*",
      },
      {
        source: "/warteg-gemini/:path*",
        destination: "/warteg/:path*",
      },
      {
        source: "/kost-gemini-koolkost/:path*",
        destination: "/kost/:path*",
      },
      {
        source: "/podcast-michael/:path*",
        destination: "/podcast/:path*",
      },
      {
        source: "/musik-production-michael/:path*",
        destination: "/musik/:path*",
      },
    ];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  // Webpack optimization
  webpack: (config) => {
    return config;
  },

  // Turbopack configuration
  turbopack: {},

  // Generate ETags for caching
  generateEtags: true,

  // Enable React strict mode for development
  reactStrictMode: true,

  // Generate sourcemaps for errors
  productionBrowserSourceMaps: false,
};

export default nextConfig;
