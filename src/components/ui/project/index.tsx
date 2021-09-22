import * as React from 'react'

import { Box, Flex, HStack } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../../typography'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  year?: string
  name: string
  shortDescription: string
  imageUrl: string
  url: string
}

export const ProjectEntry = (props: ProjectCardProps) => {
  return (
    <Link href={props.url} passHref>
      <HStack
        as='a'
        p={6}
        h='inherit'
        w='full'
        borderWidth='1px'
        borderRadius={6}
        borderColor='gray.600'
      >
        <Box mr={4}>
          <Image
            height={64}
            width={64}
            src={props.imageUrl}
            alt={`${props.name}'s Logo`}
          />
        </Box>
        <Flex w='full' direction='column'>
          <TextHeading as='h3' m={0}>
            {props.name}
          </TextHeading>
          <TextParagraph>{props.shortDescription}</TextParagraph>
        </Flex>
      </HStack>
    </Link>
  )
}
