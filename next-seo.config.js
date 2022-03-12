// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */
const defaultSEOConfig = {
  defaultTitle: 'Christopher Angelo — Software Engineer and Community Manager',
  titleTemplate: '%s | Christopher Angelo — Software Engineer and Community Manager',

  description:
    'A Full-stack Software Engineer and a community leader with a passion for building software that improves the lives of others.',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${process.env.SITE_URL ?? 'https://angeloanan.xyz'}/images/og.png`,
        alt: 'Christopher Angelo — Software Engineer and Community Manager'
      }
    ],
    url: process.env.SITE_URL ?? 'https://angeloanan.xyz',
    site_name: 'Christopher Angelo - Full-stack Developer'
  },

  twitter: {
    handle: '@uwungelo',
    site: '@uwungelo',
    cardType: 'summary_large_image'
  },

  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'favicon.ico'
    }
  ],
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#d946ef'
    }
  ]
}

export default defaultSEOConfig
