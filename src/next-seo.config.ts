import { NextSeoProps } from 'next-seo'

const NextSEOConfig: NextSeoProps = {
  title: "Christopher Angelo's Website",
  description:
    "Hello, I'm Angelo. This is my website which includes my projects, portfolio and more awesome stuff!",
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
    title: "Christopher Angelo's Website",
    description:
      "Hello, I'm Angelo. This is my website which includes my projects, portfolio and more awesome stuff!",
    site_name: 'Personal Website',
    images: [
      {
        url: '/pfp.png',
        alt: "Angelo's Profile Picture"
      }
    ]
  },
  twitter: {
    handle: '@UwUngelo',
    site: '@UwUngelo',
    cardType: 'summary'
  }
}

export default NextSEOConfig
