import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
  experimental: {
    serverActions: {
      // Photos HD : on autorise des uploads jusqu'à 30 Mo (plusieurs photos).
      bodySizeLimit: "30mb",
    },
  },
};

export default nextConfig;
