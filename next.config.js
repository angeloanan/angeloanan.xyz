// @ts-check

// const withPlugins = require('next-compose-plugins')

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
}

module.exports = nextConfig
