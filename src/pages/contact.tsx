import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import AppHeader from '../components/app-header'
import ContentSpacer from '../components/ui/content-spacer'
import Navbar from '../components/navbar'

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader />

      <Navbar />
      <ContentSpacer>
        <TextHeading>Contact Me</TextHeading>
        <TextParagraph>
          Whew, wanna talk about something with me? Let's talk!
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export default HomePage
