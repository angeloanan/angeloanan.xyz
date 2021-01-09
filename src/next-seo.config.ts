import { NextSeoProps } from 'next-seo'

const NextSEOConfig: NextSeoProps = {
  titleTemplate: '%s - Christopher Angelo',
  description:
    'Christopher Angelo. A fullstack web developer based in Indonesia. This is my website which includes my projects, portfolio and more awesome stuff!',
  canonical: 'https://angeloanan.xyz',
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#2234ce'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.angeloanan.xyz/',
    title: 'Christopher Angelo - Fullstack Web Developer.',
    description:
      'Christopher Angelo. A fullstack web developer based in Indonesia. This is my website which includes my projects, portfolio and more awesome stuff!',
    images: [
      {
        url: 'https://angeloanan.xyz/img/banner.png',
        alt: 'Christopher Angelo - Fullstack Web Developer.'
      }
    ]
  },
  twitter: {
    handle: '@UwUngelo',
    site: '@UwUngelo',
    cardType: 'summary_large_image'
  }
}

export default NextSEOConfig
