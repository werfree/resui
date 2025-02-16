import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "/proxy/3000",
  assetPrefix: "/proxy/3000",
  images: {
    loader: "imgix",
    path: "https://code.werfree.fun/proxy/3000/",
  },
};

export default nextConfig;
