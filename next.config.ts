import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately via `npm run lint`; don't block production builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
