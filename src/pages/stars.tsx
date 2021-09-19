import * as React from 'react'

import {
  Avatar,
  Box,
  HStack,
  Link as ChakraLink,
  ListItem,
  SimpleGrid,
  Skeleton,
  UnorderedList
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import useSWRImmutable from 'swr/immutable'

import { TextHeading, TextParagraph } from '../components/typography'
import type { RepositoryStargazers } from '../types/github'

interface StargazerEntryProps {
  repoName: string
}

const swrFetcher = url => fetch(url).then(r => r.json())

const StargazerEntry: React.FC<StargazerEntryProps> = ({ repoName }) => {
  const { data, error } = useSWRImmutable<RepositoryStargazers[], Error>(
    `https://api.github.com/repos/angeloanan/${repoName}/stargazers`,
    swrFetcher
  )

  if (error != null) {
    console.error(error)
    return (
      <TextParagraph as='em' mt={4}>
        Whoops, an error has occured. Seems like you have achieved the maximum
        number api requests 😔
      </TextParagraph>
    )
  }

  if (data == null) {
    return (
      <SimpleGrid columns={3} spacing={3} mt={2}>
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} height={8} />
        ))}
      </SimpleGrid>
    )
  }

  console.log(data)

  return (
    <SimpleGrid columns={3} spacing={3}>
      {data
        .filter(user => user.login !== 'angeloanan')
        .map(user => {
          return (
            <NextLink href={`https://github.com/${user.login}`} key={user.login}>
              <HStack as="a">
                <Avatar src={user.avatar_url} name={user.login} size='sm' />
                <ChakraLink isTruncated opacity={0.7} flex={1}>
                  {user.login}
                </ChakraLink>
              </HStack>
            </NextLink>
          )
        })}
    </SimpleGrid>
  )
}

const StarsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Stars' />
      <Box as='header'>
        <TextHeading as='h1'>Stargazers 🌟</TextHeading>
        <TextParagraph>
          Thanks for everyone who&apos;s been supporting and starring my
          projects!
        </TextParagraph>
      </Box>

      <TextParagraph>You can see my public projects here</TextParagraph>

      <UnorderedList mt={4}>
        <ListItem>
          <NextLink href='https://github.com/angeloanan' passHref>
            <ChakraLink>GitHub (@angeloanan)</ChakraLink>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href='https://gitlab.com/angeloanan' passHref>
            <ChakraLink>GitLab (@angeloanan)</ChakraLink>
          </NextLink>
        </ListItem>
      </UnorderedList>

      <TextHeading as='h2' mt={8}>
        Top GitHub Repository
      </TextHeading>
      <TextParagraph>
        Below are stargazers from my top GitHub OSS projects. You guys rocks!
      </TextParagraph>

      <TextHeading as='h3' mt={8}>
        MPC-HC Discord Rich Presence
      </TextHeading>
      <StargazerEntry repoName='MPC-DiscordRPC' />

      <TextHeading as='h3' mt={8}>
        Lyrics Finder
      </TextHeading>
      <StargazerEntry repoName='lyrics-finder' />

      <TextHeading as='h3' mt={8}>
        This website
      </TextHeading>
      <StargazerEntry repoName='angeloanan.xyz' />
    </>
  )
}

export default StarsPage
