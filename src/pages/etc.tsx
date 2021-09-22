import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import { NextSeo } from 'next-seo'

const ETCPage = () => {
  return (
    <>
      <NextSeo title='Other things' />
      <TextHeading as='header'>Other Stuff...</TextHeading>

      <TextParagraph as='em' mt={8}>
        This page is still work in progress...
      </TextParagraph>
    </>
  )
}

export default ETCPage
