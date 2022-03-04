import '@fontsource/inter/variable.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/500.css'
import '../style/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

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
    <>
      <DefaultSeo />
      <div className='stylized-bg min-h-screen antialiased selection:bg-fuchsia-200'>
        <MainNav />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default CustomApp
