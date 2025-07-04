import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
  },
  experimental: {
    turbo: {
      resolveExtensions: [".js", ".ts", ".tsx"],
    },
  },
};

export default nextConfig;
