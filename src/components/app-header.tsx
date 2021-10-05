import * as React from 'react'

import Head from 'next/head'
import Script from 'next/script'

const AppHeader = () => {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='img/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='img/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='img/favicon-16x16.png'
        />
        <link rel='manifest' href='img/site.webmanifest' />
      </Head>
      <Script
        src='https://static.cloudflareinsights.com/beacon.min.js'
        strategy='afterInteractive'
        data-cf-beacon='{"token": "cfd267d6703949c983f709fae0f5c5d9"}'
      />
    </>
  )
}

export default AppHeader
