import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  basePath: "/Sangeet",
  assetPrefix: "/Sangeet/",

  reactCompiler: true,
};

export default nextConfig;