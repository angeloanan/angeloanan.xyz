import '@fontsource/inter/400.css' // Weight 400.
import '@fontsource/inter/variable-full.css' // Contains ONLY variable weights and no other axes.

import * as React from 'react'

import { ChakraProvider, Flex } from '@chakra-ui/react'

import { AppFooter } from '../components/app-footer'
import AppHeader from '../components/app-header'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Navbar from '../components/navbar'
import theme from '../theme'
import SEO from '../next-seo.config'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <AppHeader />
        <Navbar />

        <Flex px={8} maxW='2xl' mx='auto' flexDir='column' as='main'>
          <Component {...pageProps} />
        </Flex>

        <AppFooter />
      </ChakraProvider>
    </>
  )
}

export default CustomApp
