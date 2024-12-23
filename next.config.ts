import type { NextConfig } from "next";
import pkg_config from './package.json';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/auth/signin',
        destination: '/',
        permanent: true
      }
    ]
  },
  env: {
    NEXT_PUBLIC_VERSION: pkg_config.version
  }
}

export default nextConfig;

