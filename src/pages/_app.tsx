import '@fontsource/inter/variable.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/500.css'
import '../style/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'

import DefaultSEOConfig from '../../next-seo.config'
import { MainFooter } from '../components/Footer'
import { MainNav } from '../components/Navbar'

type CustomAppProps = AppProps & {
  Component: NextPage & {
    disableLayout?: boolean
  }
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  return Component.disableLayout ? (
    <Component {...pageProps} />
  ) : (
    <PlausibleProvider
      domain='angeloanan.xyz'
      customDomain='https://a.angelo.fyi'
      selfHosted
      trackOutboundLinks
      trackFileDownloads
    >
      <DefaultSeo {...DefaultSEOConfig} />

      <div className='stylized-bg min-h-screen antialiased selection:bg-fuchsia-200'>
        <MainNav />
        <Component {...pageProps} />
        <MainFooter />
      </div>
    </PlausibleProvider>
  )
}

export default CustomApp
