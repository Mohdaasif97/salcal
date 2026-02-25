import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Permissions-Policy',
          value: 'interest-cohort=()'
        }
      ]
    }
  ]
};

export default nextConfig;