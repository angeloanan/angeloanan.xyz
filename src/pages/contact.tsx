import * as React from 'react'

import { Box, Code, Tooltip, useClipboard } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import { NextSeo } from 'next-seo'

const ContactsPage: React.FC = () => {
  const email = 'angelo@angeloanan.xyz'
  const { hasCopied, onCopy } = useClipboard(email)

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
          <TextParagraph mt={4}>
            You can contact me by email on{' '}
            <Tooltip
              label={hasCopied ? 'Copied!' : 'Click to copy'}
              placement='top'
              closeDelay={500}
            >
              <Code colorScheme='yellow' onClick={onCopy}>{email}</Code>
            </Tooltip>
          </TextParagraph>
        </Box>
      </ContentSpacer>
    </>
  )
}

export default ContactsPage
