import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/Sangeet",       // 🔁 replace with your repo name
  assetPrefix: "/portfolio/",

  images: {
    unoptimized: true,
  },

  reactCompiler: true,
};

export default nextConfig;
