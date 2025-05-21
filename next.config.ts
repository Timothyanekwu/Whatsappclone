import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    reactStrictMode: true,

  experimental: {
  },
  postcssConfig: {
    path: './postcss.config.js',
  },

};

export default nextConfig;
