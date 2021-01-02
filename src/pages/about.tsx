import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'

const AboutPage: React.FC = () => {
  return (
    <ContentSpacer>
      <TextHeading>About Me</TextHeading>
      <TextParagraph>
        Hi, I'm Christopher Angelo - A full-stack web developer based on
        Jakarta, Indonesia. I've started to learn how to code out of curiosity
        when I was 13 years old.
      </TextParagraph>

      <TextParagraph as='em'>
        This page is still work in progress...
      </TextParagraph>
    </ContentSpacer>
  )
}

export default AboutPage
