import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generate static "out" folder
  images: {
    unoptimized: true, // For <Image /> in static export
  },
};

export default nextConfig;
