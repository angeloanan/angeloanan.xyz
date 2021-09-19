const withPlugins = require('next-compose-plugins')

const withPreact = require('next-plugin-preact')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins([withPreact, withBundleAnalyzer], {
  reactStrictMode: true,
  experimental: {
    optimizeImages: true,
    optimizeCss: true,
    stats: true
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US'
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')()
    }

    return config
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
    domains: ['lastfm.freetls.fastly.net']
  }
})
