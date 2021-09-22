import * as React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

interface OpenGraphProps {
  title?: string
  type?: string
  desc?: string
  url?: string
  img?: string
}

const OpenGraph = (props: OpenGraphProps) => {
  const currentPath = useRouter().pathname

  return (
    <Head>
      <meta
        property='title'
        content={
          props.title != null
            ? `${props.title} | Christopher Angelo's Website`
            : "Christopher Angelo's Website"
        }
      />
      <meta
        property='description'
        content={
          props.desc ??
          "Hello, I'm Christopher Angelo. This is my website which includes my projects, portfolio and more awesome stuff!"
        }
      />

      <meta
        property='og:title'
        content={
          props.title != null
            ? `${props.title} | Christopher Angelo's Website`
            : "Christopher Angelo's Website"
        }
      />
      <meta property='og:type' content={props.type ?? 'website'} />
      <meta
        property='og:description'
        content={
          props.desc ??
          "Hello, I'm Christopher Angelo. This is my website which includes my projects, portfolio and more awesome stuff!"
        }
      />
      <meta
        property='og:url'
        content={'https://angeloanan.xyz' + currentPath}
      />
      <meta property='og:image' content={props.img ?? '/pfp.png'} />
    </Head>
  )
}

export default OpenGraph
