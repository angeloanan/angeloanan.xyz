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

export default class Document extends NextDocument {
  static async getInitialProps (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await NextDocument.getInitialProps(ctx)
  }

  render (): JSX.Element {
    return (
      <Html>
        <Head />
        <body style={{ minHeight: '100vh' }}>
          <ColorModeScript initialColorMode='dark' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
