import * as React from 'react'

import { Box, VStack } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { NextSeo } from 'next-seo'
import { ProjectEntry } from '../components/ui/project'
import projectList from '../_data/projects.json'
import AngeloAvatar from '../components/ui/AngeloAvatar'

const HomePage = () => {
  return (
    <>
      <NextSeo
        title='Christopher Angelo - Fullstack Web Developer'
        titleTemplate='%s'
      />
      <Box as='header'>
        <AngeloAvatar />
        <TextHeading as='h1' mt={4}>
          Yo, I&apos;m Christopher Angelo
        </TextHeading>
        <TextParagraph>
          I am a university student and a full-stack web developer. I taught
          myself how to code when I was 13. Ended up creating Discord bots for
          friends. Welcome to my website!
        </TextParagraph>
      </Box>

      {/* Project Section */}
      <Box mt={8} as='section'>
        <TextHeading as='h2'>Recent Project</TextHeading>
        <VStack spacing={4} justify='center'>
          {projectList.map(projectDetails => (
            <ProjectEntry key={projectDetails.name} {...projectDetails} />
          ))}
        </VStack>
      </Box>
    </>
  )
}

export default HomePage
