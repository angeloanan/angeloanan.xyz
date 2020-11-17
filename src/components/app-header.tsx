import * as React from 'react'

import Head from 'next/head'

interface AppHeaderProps {
  title?: string
}

const AppHeader: React.FC<AppHeaderProps> = props => {
  return (
    <Head>
      <title>
        {props.title != null
          ? `${props.title} | Christopher Angelo's Website`
          : "Christopher Angelo's Website"}
      </title>
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
  )
}

export default AppHeader
