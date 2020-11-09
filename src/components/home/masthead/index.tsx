import * as React from 'react'

import { Box, Center, Flex, Heading, Text } from '@chakra-ui/core'

import ContentSpacer from '../../ui/content-spacer'
import Image from 'next/image'

const Masthead: React.FC = () => {
  return (
    <ContentSpacer>
      <Flex minH="80vh" direction="row">
        <Flex direction="column" justify="center" flex={6} px={4}>
          <Text size="sm" color="gray.200" letterSpacing="widest" my={2} fontWeight="400">CHRISTOPHER ANGELO</Text>
          <Heading size="3xl" mb={4} lineHeight="none">Fullstack Web Developer</Heading>
          <Text color="gray.200" fontWeight="500" fontSize="lg">I am a University student studying while tinkering with code. I self thought myself how to program when I was in the 8th grade out of curiosity. Ended up creating Discord bots for friends, one of which are in more than 3.5k server with over 400k unique users.</Text>
        </Flex>
        <Box flex={1}/>
        <Center flex={4} px={4}>
          <Image
            src="/pfp.png"
            alt="Angelo's Profile Picture"
            width={500}
            height={500}
            layout="intrinsic"
            priority
          />
        </Center>
      </Flex>
    </ContentSpacer>
  )
}

export default Masthead
