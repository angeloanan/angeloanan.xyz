import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import AppHeader from '../components/app-header'
import { Box } from '@chakra-ui/react'
import ContentSpacer from '../components/ui/content-spacer'
import Navbar from '../components/navbar'

const ProjectsPage: React.FC = () => {
  return (
    <>
      <AppHeader />

      <Navbar />
      <ContentSpacer>
        <Box mb={4}>
          <TextHeading as='h1'>Projects</TextHeading>
          <TextParagraph>
            Here are every project that I've worked for in the past
          </TextParagraph>
        </Box>

        <TextParagraph as='em'>
          This page is still work in progress...
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export default ProjectsPage
