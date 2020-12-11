import * as React from 'react'

import { Box, Stack } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { AngeloAvatar } from '../components/ui/angelo-avatar'
import AppHeader from '../components/app-header'
import ContentSpacer from '../components/ui/content-spacer'
import Navbar from '../components/navbar'
import { ProjectEntry } from '../components/ui/project'

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
            <ProjectEntry
              name='Frontend Indonesia'
              description='Indonesian Frontend Web Developer community'
              imageUrl='/img/projects/frontend-id.png'
              url='https://feid.dev'
            />
            <ProjectEntry
              name='Lyrics Finder'
              description='A Discord bot to search for Lyrics of a song on Genius'
              imageUrl='/img/projects/lyrics-finder.png'
              url='https://lyrics-finder.angeloanan.xyz'
            />
          </Stack>
        </Box>
      </ContentSpacer>
    </>
  )
}

export default HomePage
