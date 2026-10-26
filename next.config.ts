import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "standalone",
  async redirects() {
    return [
      { source: "/pbx", destination: "/cloud-pbx", permanent: false },
      { source: "/ai-agents", destination: "/voice-bot", permanent: false },
      { source: "/pricing", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
