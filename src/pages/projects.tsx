import * as React from 'react'

import { TextHeading, TextParagraph } from '../components/typography'

import { Box } from '@chakra-ui/react'
import ContentSpacer from '../components/ui/content-spacer'

const ProjectsPage: React.FC = () => {
  return (
    <>
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
