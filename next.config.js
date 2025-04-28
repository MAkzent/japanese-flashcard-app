/** @type {import('next').NextConfig} */
import NextPWA from 'next-pwa';

const withPWA = NextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Reduce the size of the build
  experimental: {
    optimizeCss: true,
  },
  // Improve performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withPWA(nextConfig);