import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import { NextSeo } from 'next-seo'

const StarsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Stars' />
      <ContentSpacer as='article'>
        <TextHeading as='header'>Stargazers 🌟</TextHeading>

        <TextParagraph as='em' mt={4}>
          There isn't anything right now... Awkward...
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export default StarsPage
