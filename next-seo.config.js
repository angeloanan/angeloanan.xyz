// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */
const defaultSEOConfig = {
  title: 'Christopher Angelo - Full-stack Developer',
  titleTemplate: '%s | Christopher Angelo - Full-stack Developer',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL ?? 'https://angeloanan.xyz',
    site_name: 'Christopher Angelo - Full-stack Developer'
  },

  twitter: {
    handle: '@uwungelo',
    site: '@uwungelo',
    cardType: 'summary_large_image'
  }
}

export default defaultSEOConfig
