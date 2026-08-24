import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the duplicate-lockfile workspace-root warning by pinning Turbopack
  // to this directory. See:
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
