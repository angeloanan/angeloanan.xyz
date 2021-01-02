import * as React from 'react'

import { Box, Flex, HStack } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../../typography'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  year?: string
  name: string
  description: string
  imageUrl: string
  url: string
}

export const ProjectEntry: React.FC<ProjectCardProps> = props => {
  return (
    <Link href={props.url} passHref>
      <a>
        <Box p={6} h='inherit' w='full' borderWidth='1px' borderRadius={4}>
          <HStack>
            <Box mr={4}>
              <Image height={64} width={64} src={props.imageUrl} />
            </Box>
            <Flex w='full' direction='column'>
              <TextHeading as='h3' m={0}>
                {props.name}
              </TextHeading>
              <TextParagraph m={0} opacity={0.8}>
                {props.description}
              </TextParagraph>
            </Flex>
          </HStack>
        </Box>
      </a>
    </Link>
  )
}
