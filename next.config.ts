import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
  swcMinify: true,
};

export default nextConfig;
