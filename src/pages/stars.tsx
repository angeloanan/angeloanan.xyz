import * as React from 'react'

import {
  Avatar,
  HStack,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import useSWR from 'swr'

const StarsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Stars' />
      <ContentSpacer as='article'>
        <TextHeading as='header'>Stargazers 🌟</TextHeading>
        <TextParagraph>
          Thanks for everyone who's been supporting and starring my projects! My
          projects are on:
        </TextParagraph>

        <UnorderedList mt={2}>
          <ListItem>
            <NextLink href='https://github.com/angeloanan' passHref>
              <Link>GitHub (@angeloanan)</Link>
            </NextLink>
          </ListItem>
        </UnorderedList>

        <TextHeading as='h2' asstyle='h3' mt={8}>
          Lyrics Finder
        </TextHeading>
        <StargazerEntry repoName='lyrics-finder' />

        <TextHeading as='h2' asstyle='h3' mt={16}>
          This website
        </TextHeading>
        <StargazerEntry repoName='angeloanan.xyz' />
        <TextHeading as='h2' asstyle='h3' mt={16}>
          My extension pack
        </TextHeading>
        <StargazerEntry repoName='extension-pack' />
      </ContentSpacer>
    </>
  )
}

interface GithubStargazersResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: 'User'
  site_admin: false
}

interface StargazerEntryProps {
  repoName: string
}

const StargazerEntry: React.FC<StargazerEntryProps> = ({ repoName }) => {
  const { data, error } = useSWR<GithubStargazersResponse[], Error>(
    `https://api.github.com/repos/angeloanan/${repoName}/stargazers`,
    { refreshInterval: 60 * 1000, errorRetryCount: 2 }
  )

  if (error != null) {
    console.error(error)
    return (
      <TextParagraph as='em' mt={4}>
        Whoops. An error has occured!
      </TextParagraph>
    )
  } else if (data == null) {
    return (
      <TextParagraph as='em' mt={4}>
        Loading...
      </TextParagraph>
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
                  <Text isTruncated opacity={0.7}>
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
