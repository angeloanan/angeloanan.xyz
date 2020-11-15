import * as React from 'react'

import { Text, VStack, Wrap } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import ContentSpacer from '../components/ui/content-spacer'
import ProjectCard from '../components/ui/content-spacer/project-section/project-card'

const ProjectsPage: React.FC = () => {
  return <>
    <Navbar />
    <ContentSpacer p={4}>
      <VStack spacing={4}>
        <Text size="lg" fontWeight={600} p={4} alignSelf="flex-start">Here are some projects that I've been working on:</Text>

        <Wrap spacing={4} justify="center">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Wrap>
      </VStack>
    </ContentSpacer>
  </>
}

export default ProjectsPage
