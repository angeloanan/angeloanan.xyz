import * as React from 'react'

import { Box, Link, Text } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'

const AboutPage: React.FC = () => {
  return (
    <>
      <NextSeo title='About Me' />
      <ContentSpacer>
        <TextHeading as='h1'>About Me</TextHeading>
        <TextParagraph>
          Hi, I'm Christopher Angelo - A full-stack web developer based on
          Jakarta, Indonesia. I've started to learn how to code out of curiosity
          when I was 13 years old.
        </TextParagraph>

        <Box mt={8} fontWeight='400'>
          <Text as='span' fontWeight='400'>
            See my CV at
          </Text>{' '}
          <NextLink href='https://cv.angelo.fyi' passHref>
            <Link color='blue.200'>cv.angelo.fyi</Link>
          </NextLink>
        </Box>

        <TextParagraph as='em' mt={8}>
          This page is still work in progress...
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export default AboutPage
