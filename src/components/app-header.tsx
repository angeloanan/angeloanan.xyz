import * as React from 'react'

import Head from 'next/head'

interface AppHeaderProps{
  title?: string
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  return (
    <Head>
      <title>{props.title != null ? `${props.title} | Christopher Angelo's Website` : 'Christopher Angelo\'s Website'}</title>
    </Head>
  )
}

export default AppHeader
