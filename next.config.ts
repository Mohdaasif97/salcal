import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
  optimizePackageImports: ["lucide-react"],
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  }
};

export default nextConfig;
