import * as React from 'react'

import { Box, HStack, Image, Link, Text } from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
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
      <a>
        <Box my={4} p={2} borderWidth='1px' borderRadius='md'>
          <HStack>
            <Image src={image} boxSize="64px"/>
            <Box>
              <HStack alignContent='center'>
                <Link fontSize='xl' fontWeight={700} isExternal>
                  {title} <ExternalLinkIcon mx='2px' />
                </Link>
              </HStack>
              <Text fontSize='sm' fontWeight={200}>
                {artist}
              </Text>
            </Box>
          </HStack>
        </Box>
      </a>
    </NextLink>
  )
}

export default SpotifyTrack
