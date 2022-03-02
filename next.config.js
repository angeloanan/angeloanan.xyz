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
  experimental: {
    reactRoot: true,
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=86400; includeSubDomains; preload' // 1 Day
          }
        ]
      }
    ]
  },

  images: {
    domains: ['lastfm.freetls.fastly.net'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)