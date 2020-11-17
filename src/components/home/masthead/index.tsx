import * as React from 'react'

import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  ThemingProps,
  TypographyProps,
  useBreakpointValue
} from '@chakra-ui/react'

import ContentSpacer from '../../ui/content-spacer'
import Image from 'next/image'

const Masthead: React.FC = () => {
  const excerptSize = useBreakpointValue<TypographyProps['fontSize']>({
    base: 'xs',
    lg: 'sm'
  })
  const headingSize = useBreakpointValue<ThemingProps['size']>({
    sm: '2xl',
    md: '2xl',
    lg: '3xl'
  })
  const descriptionSize = useBreakpointValue<TypographyProps['fontSize']>({
    base: 'sm',
    md: 'sm',
    lg: 'md'
  })

  return (
    <ContentSpacer p={4} minH='80vh'>
      <HStack direction='row'>
        <Flex direction='column' flex={6} px={4}>
          <Text
            fontSize={excerptSize}
            color='gray.200'
            letterSpacing='widest'
            my={2}
            fontWeight='400'
          >
            CHRISTOPHER ANGELO
          </Text>
          <Heading as='h1' size={headingSize} mb={4} lineHeight='none'>
            Fullstack Web Developer{' '}
          </Heading>
          <Text
            as='p'
            fontSize={descriptionSize}
            color='gray.200'
            fontWeight='500'
          >
            I am an university student studying while tinkering with code. I
            self taught myself how to code out of curiosity at grade 8th. I've
            ended up creating Discord bots, one of which are in more than 3.5k
            server with over 400k unique users.
          </Text>
        </Flex>
        <Box flex={{ base: 0, sm: 1 / 8, md: 1 / 4, lg: 1 / 2 }} />
        <Box flex={{ lg: 2, md: 3, base: 4 }} alignSelf='center'>
          <Image
            src='/pfp.png'
            alt="Angelo's Profile Picture"
            width='100%'
            height='100%'
            layout='responsive'
            priority
          />
        </Box>
      </HStack>
    </ContentSpacer>
  )
}

export default Masthead
