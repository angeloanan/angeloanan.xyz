import '@fontsource/jetbrains-mono/400.css'

import * as React from 'react'

import {
  Box,
  Code,
  Text,
  Tooltip,
  UnorderedList,
  useClipboard
} from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { ListItemWithLink } from '../components/typography/ListItemWithProps'
import { NextSeo } from 'next-seo'

interface ContactsListItemProps {
  platform: string
  description: string
  url: string
}

const ContactsListItem = ({
  platform,
  description,
  url
}: ContactsListItemProps) => {
  return (
    <ListItemWithLink url={url}>
      <Text color='contrast.200' as='span'>
        {platform}
      </Text>{' '}
      &mdash; {description}
    </ListItemWithLink>
  )
}

const ContactsPage = () => {
  const email = 'angelo@angeloanan.xyz'
  const { hasCopied, onCopy } = useClipboard(email)

  return (
    <>
      <NextSeo title='Contact Me' />
      <Box as='article'>
        <Box as='header'>
          <TextHeading as='h1'>Let&apos;s talk!</TextHeading>
          <TextParagraph>
            Whew, wanna talk about something with me? Let&apos;s get in touch!
          </TextParagraph>
          <UnorderedList mt={2}>
            <ContactsListItem
              platform='Discord'
              description='Angelo#0420'
              url='https://discord.com/users/189769721653100546'
            />
            <ContactsListItem
              platform='Telegram'
              description='@angeloanan'
              url='https://t.me/angeloanan'
            />
            <ContactsListItem
              platform='PGP'
              description='CC48 058E 19CC AE65'
              url='https://keybase.io/angeloanan'
            />
          </UnorderedList>
        </Box>

        <TextHeading as='h2' mt={8}>
          Find Me
        </TextHeading>
        <TextParagraph>Come and find my online presence!</TextParagraph>
        <UnorderedList mt={2}>
          <ContactsListItem
            platform='Linkedin'
            description='angeloanan'
            url='https://www.linkedin.com/in/angeloanan/'
          />
          <ContactsListItem
            platform='Twitter'
            description='@UwUngelo'
            url='https://twitter.com/uwungelo'
          />
          <ContactsListItem
            platform='GitHub'
            description='@angeloanan'
            url='https://github.com/angeloanan'
          />
          <ContactsListItem
            platform='Last.fm'
            description='@angeloanan'
            url='https://www.last.fm/user/angeloanan'
          />
        </UnorderedList>

        <Box mt={4}>
          <TextParagraph as='span'>
            Other than that, you can contact me by email on{' '}
          </TextParagraph>
          <Tooltip
            label={hasCopied ? 'Copied!' : 'Click to copy'}
            placement='top'
            closeDelay={500}
          >
            <Code
              color='yellow.200'
              backgroundColor='yellow.900'
              type='outline'
              onClick={onCopy}
            >
              {email}
            </Code>
          </Tooltip>
        </Box>
      </Box>
    </>
  )
}

// In the future:
// `${106899924..toString(25)}@${1081770706731119..toString(36)}.${44027..toString(36)}`

export default ContactsPage
