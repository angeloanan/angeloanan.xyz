import 'fontsource-inter/variable.css'

import * as React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { AppFooter } from '../components/app-footer'
import AppHeader from '../components/app-header'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { DefaultSeo } from 'next-seo'
import Navbar from '../components/navbar'
import SEO from '../next-seo.config'
import theme from '../theme'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        {...SEO}
        // dangerouslySetAllPagesToNoIndex={true}
        // dangerouslySetAllPagesToNoFollow={true}
      />
      <ChakraProvider theme={extendTheme(theme)}>
        <AppHeader />
        <Navbar />

        <Component {...pageProps} />

        <AppFooter />
      </ChakraProvider>
    </>
  )
}

export default CustomApp
