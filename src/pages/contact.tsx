import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'

const HomePage: React.FC = () => {
  return (
    <ContentSpacer>
      <TextHeading>Contact Me</TextHeading>
      <TextParagraph>
        Whew, wanna talk about something with me? Let's talk!
      </TextParagraph>
    </ContentSpacer>
  )
}

export default HomePage
