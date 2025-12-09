import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/morel-mathias.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
