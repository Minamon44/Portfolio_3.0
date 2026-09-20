import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio-3.0",
  assetPrefix: "/Portfolio-3.0/",
};

export default nextConfig;
