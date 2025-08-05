import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { basePath } from "@/config";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().getTime().toString(),
    CRYPTO_KEY: process.env.CRYPTO_KEY,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  basePath: basePath,
  assetPrefix: basePath,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          typescript: true,
          exportType: 'default',
          svgo: false,
          memo: true
        }
      }]
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
