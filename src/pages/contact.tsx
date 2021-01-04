import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import { Box } from '@chakra-ui/react'
import ContentSpacer from '../components/ui/content-spacer'
import { NextSeo } from 'next-seo'

const ContactsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Contacts' />
      <ContentSpacer>
        <Box as='article'>
          <Box as='header'>
            <TextHeading as='h1'>Contact Me</TextHeading>
            <TextParagraph>
              Whew, wanna talk about something with me? Let's talk!
            </TextParagraph>
          </Box>
        </Box>
      </ContentSpacer>
    </>
  )
}

export default ContactsPage
