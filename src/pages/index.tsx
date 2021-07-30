import * as React from 'react'

import { Box, HStack, Stack, Avatar, Text } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { NextSeo } from 'next-seo'
import { ProjectEntry } from '../components/ui/project'
import Image from 'next/image'
import AngeloProfilePic from '../../public/pfp.png'
import projectList from '../_data/projects.json'

const AngeloAvatar: React.FC = props => {
  return (
    <HStack {...props} aria-hidden>
      <Image placeholder="blur" src={AngeloProfilePic} alt="Christopher Angelo's Potrait Photo" width="32px" height="32px"/>
      <Text
        fontWeight={300}
        fontFamily="text.secondary"
        fontSize='md'
        letterSpacing={1}
        as='label'
        textTransform="uppercase"
      >
        @angeloanan
      </Text>
    </HStack>
  )
}


const HomePage: React.FC = () => {
  return (
    <>
      <NextSeo
        title='Christopher Angelo - Fullstack Web Developer'
        titleTemplate='%s'
      />
      <Box as='header'>
        <AngeloAvatar />
        <TextHeading as='h1' mt={4}>Yo, I&apos;m Christopher Angelo</TextHeading>
        <TextParagraph>
          I am a university student and a full-stack web developer. I taught
          myself how to code when I was 13. Ended up creating Discord bots for
          friends. Welcome to my website!
        </TextParagraph>
      </Box>

      {/* Project Section */}
      <Box mt={8} as='section'>
        <TextHeading as='h2'>Recent Project</TextHeading>
        <Stack spacing={4}>
          {projectList.map(projectDetails => (
            <ProjectEntry key={projectDetails.name} {...projectDetails} />
          ))}
        </Stack>
      </Box>
    </>
  )
}

export default HomePage
