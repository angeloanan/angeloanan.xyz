import * as React from 'react'

import { Box, HStack, Link as ChakraLink, Text } from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import NextLink from 'next/link'

interface SpotifyTrackProps {
  title: string
  artist: string
  image: string
  url: string
}

const SpotifyTrack: React.FC<SpotifyTrackProps> = ({
  title,
  artist,
  image,
  url
}) => {
  return (
    <NextLink href={url} passHref>
      <HStack as="a" my={4} p={4} borderWidth='1px' borderRadius='8' borderColor="gray.600">
        <Box mr={4}>
          <Image src={image} alt={`Album art for ${title} by ${artist}`} height={64} width={64} layout='fixed'/>
        </Box>
        <Box>
          <ChakraLink fontSize='2xl' fontWeight={600} isExternal>
            {title} <ExternalLinkIcon mx='2px' />
          </ChakraLink>
          <Text fontSize='sm' fontWeight={200}>
            {artist}
          </Text>
        </Box>
      </HStack>
    </NextLink>
  )
}

export default SpotifyTrack
