import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  experimental: {
    agentUpgrade: "security",
  },
  async rewrites() {
    return [
      {
        source:
          "/indian-subsidiary/:slug(understanding-business-registration-essentials-benefits|set-up-business-in-india-a-comprehensive-guide|start-a-business-in-india-stepbystep-guide|indian-subsidiary-setup-comprehensive-guide|establishing-an-indian-subsidiary-guide)",
        destination: "/company-registration/:slug",
      },
    ];
  },
};

export default nextConfig;