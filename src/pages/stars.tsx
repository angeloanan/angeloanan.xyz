import * as React from 'react'

import {
  Avatar,
  Box,
  HStack,
  Link,
  ListItem,
  SimpleGrid,
  Skeleton,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import { RepositoryStargazers } from '../types/github'
import useSWR from 'swr'

const StarsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Stars' />
      <ContentSpacer as='article'>
        <Box as='header'>
          <TextHeading as='h1'>Stargazers 🌟</TextHeading>
          <TextParagraph>
            Thanks for everyone who's been supporting and starring my projects!
          </TextParagraph>
        </Box>

        <TextParagraph>You can see my public projects here</TextParagraph>

        <UnorderedList mt={4}>
          <ListItem>
            <NextLink href='https://github.com/angeloanan' passHref>
              <Link>GitHub (@angeloanan)</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href='https://gitlab.com/angeloanan' passHref>
              <Link>GitLab (@angeloanan)</Link>
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
      </ContentSpacer>
    </>
  )
}

interface StargazerEntryProps {
  repoName: string
}

const StargazerEntry: React.FC<StargazerEntryProps> = ({ repoName }) => {
  const { data, error } = useSWR<RepositoryStargazers[], Error>(
    `https://api.github.com/repos/angeloanan/${repoName}/stargazers`,
    { refreshInterval: 60 * 1000, errorRetryCount: 2 }
  )

  if (error != null) {
    console.error(error)
    return (
      <TextParagraph as='em' mt={4}>
        Whoops, an error has occured. Seems like you have achieved the maximum
        number api requests.
      </TextParagraph>
    )
  } else if (data == null) {
    return (
      <>
        <SimpleGrid columns={3} spacing={2} mt={2}>
          {[...Array(9)].map((_, i) => (
            <Skeleton key={i} height={8} />
          ))}
        </SimpleGrid>
      </>
    )
  } else {
    return (
      <>
        <SimpleGrid columns={3} spacing={2}>
          {data
            .filter(user => user.login !== 'angeloanan')
            .map(user => {
              return (
                <HStack key={user.login}>
                  <Avatar src={user.avatar_url} name={user.login} size='sm' />
                  <Text isTruncated opacity={0.7} flex={1}>
                    {user.login}
                  </Text>
                </HStack>
              )
            })}
        </SimpleGrid>
      </>
    )
  }
}

export default StarsPage
