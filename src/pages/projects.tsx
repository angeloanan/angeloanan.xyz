import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import { Box } from '@chakra-ui/react'
import ContentSpacer from '../components/ui/content-spacer'
import { NextSeo } from 'next-seo'

const ProjectsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Projects' />
      <ContentSpacer>
        <Box mb={4} as='article'>
          <Box as='header'>
            <TextHeading as='h1'>Projects I've worked on</TextHeading>
            <TextParagraph>
              Here are every project that I've worked for in the past
            </TextParagraph>
          </Box>
        </Box>

        <TextParagraph as='em'>
          This page is still work in progress...
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export default ProjectsPage
