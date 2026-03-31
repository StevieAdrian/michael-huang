import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */

  // Compression
  compress: true,

  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add your external image domains here
      // {
      //   protocol: "https",
      //   hostname: "cdn.example.com",
      // },
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
      // Example: redirect old URLs to maintain SEO value
      // {
      //   source: "/old-page",
      //   destination: "/new-page",
      //   permanent: true, // 301 redirect for SEO
      // },
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
