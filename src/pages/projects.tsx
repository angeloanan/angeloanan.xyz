import * as React from 'react'

import { Text, VStack, Wrap } from '@chakra-ui/react'

import AppHeader from '../components/app-header'
import ContentSpacer from '../components/ui/content-spacer'
import Navbar from '../components/navbar'
import ProjectCard from '../components/ui/project-section/project-card'

const ProjectsPage: React.FC = () => {
  return (
    <>
      <AppHeader />

      <Navbar />
      <ContentSpacer p={4}>
        <VStack spacing={4}>
          <Text size='lg' fontWeight={600} p={4} alignSelf='flex-start'>
            Here are some projects that I've been working on:
          </Text>

          <Wrap spacing={{ base: 16, lg: 32 }} justify='center'>
            <ProjectCard title='Lyrics Finder' />
            <ProjectCard title='KawalCovid19' />
            <ProjectCard title='Hello World' />
            <ProjectCard />
          </Wrap>
        </VStack>
      </ContentSpacer>
    </>
  )
}

export default ProjectsPage
