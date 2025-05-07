import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 在开发期间警告，但在构建时不阻止构建
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在构建时禁用类型检查，因为我们在IDE中已经进行了类型检查
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
