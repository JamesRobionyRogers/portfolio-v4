import type { NextConfig } from "next";

// Matches what `actions/configure-pages` injects in CI, so local builds behave like production
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
