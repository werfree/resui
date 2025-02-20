import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '/proxy/3000',
  assetPrefix: '/proxy/3000',
  images: {
    loader: 'imgix',
    path: 'https://code.werfree.fun/proxy/3000/',
  },
  serverExternalPackages: ['pdf-parse', 'tesseract.js'],
  future: { webpack5: true },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
