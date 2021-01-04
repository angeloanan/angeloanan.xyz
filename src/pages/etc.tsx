import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import { NextSeo } from 'next-seo'

const ETCPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Other things' />
      <ContentSpacer as='article'>
        <TextHeading as='header'>Other Stuff...</TextHeading>

        <TextParagraph as='em' mt={8}>
          This page is still work in progress...
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export default ETCPage
