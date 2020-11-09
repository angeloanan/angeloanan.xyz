import * as React from 'react'

import Head from 'next/head'

interface OpenGraphProps {
  title?: string
  type?: string
  url?: string
  img?: string
}

const OpenGraph: React.FC<OpenGraphProps> = (props: OpenGraphProps) => {
  return (
    <Head>
      <meta property="og:title" content={props.title != null ? `${props.title} | Christopher Angelo's Website` : 'Christopher Angelo\'s Website'} />
      <meta property="og:type" content={props.type ?? 'website'} />
      <meta property="og:url" content={props.url ?? 'https://angeloanan.xyz'} />
      <meta property="og:image" content={props.img ?? '/img/logo'} />
    </Head>
  )
}

export default OpenGraph
