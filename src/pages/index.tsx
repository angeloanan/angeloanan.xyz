import * as React from 'react'

import { Box, Stack } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { AngeloAvatar } from '../components/ui/angelo-avatar'
import AppHeader from '../components/app-header'
import ContentSpacer from '../components/ui/content-spacer'
import Navbar from '../components/navbar'
import { ProjectEntry } from '../components/ui/project'
import projectList from '../_data/projects.json'

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader />

      <Navbar />
      <ContentSpacer>
        <Box mb={16}>
          <AngeloAvatar mb={4} />
          <TextHeading as='h1'>Yo, I'm Christopher Angelo</TextHeading>
          <TextParagraph>
            I am a university student and a full-stack web developer. I taught
            myself how to code when I was 13. Ended up creating Discord bots for
            friends. Welcome to my website!
          </TextParagraph>
        </Box>

        {/* Project Section */}
        <Box mb={16}>
          <TextHeading as='h2'>Recent Project</TextHeading>
          <Stack spacing={4}>
            {projectList.map(projectDetails => (
              <ProjectEntry {...projectDetails} />
            ))}
          </Stack>
        </Box>
      </ContentSpacer>
    </>
  )
}

export default HomePage
