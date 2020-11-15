import * as React from 'react'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={ theme }>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default CustomApp
