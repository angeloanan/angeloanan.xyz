// @ts-check

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

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
  },
  redirects: async () => {
    return [
      {
        source: '/cv',
        destination: '/cv.pdf',
        permanent: true
      },
      {
        source: '/resume',
        destination: '/cv.pdf',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
