import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio_3.0",
  assetPrefix: "/Portfolio_3.0/",
};

export default nextConfig;
