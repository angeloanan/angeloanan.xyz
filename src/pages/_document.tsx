import * as React from 'react'

import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          {`
              ::-webkit-scrollbar {
                background-color: #333333;
                width: 5px;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #7a7a7a;
                border-radius: 4px;
              }
            `}
        </style>
      </Head>
      <body>
        <ColorModeScript initialColorMode='dark' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
