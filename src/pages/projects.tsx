import * as React from 'react'

import { Box, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { FiExternalLink } from 'react-icons/fi'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'

const ProjectsPage: React.FC = () => {
  return (
    <>
      <NextSeo title='Projects' />
        <Box mb={4} as='article'>
          <Box as='header'>
            <TextHeading as='h1'>Projects I&apos;ve Worked On</TextHeading>
            <TextParagraph>
              Here are every project that I&apos;ve worked for in the past
            </TextParagraph>
          </Box>

          <Box as='section' mt={8}>
            <HStack as='header' justify='space-between' align='center' mb={2}>
              <NextLink href='https://feid.dev' passHref>
                <Link>
                  <TextHeading as='h2' mb={0}>
                    Frontend Indonesia <Icon as={FiExternalLink} w={6} h={6} />
                  </TextHeading>
                </Link>
              </NextLink>
              <TextParagraph>Aug 2020</TextParagraph>
            </HStack>
            <TextParagraph>
              Frontend Indonesia is community of Indonesians Front-End
              developer. Imagine &quot;
              <Text as='em'>
                Reactiflux but for Indonesian speaking community
              </Text>
              &quot;.
            </TextParagraph>
            <TextParagraph mt={2}>
              It is a framework agnostic community, meaning that it is a
              &quot;melting pot&quot; of many Indonesian Front-end community. We are
              targeting so that everyone have a space to talk about anything,
              from beginners to seniors, from developer to recruiter, from
              legacy to modern.
            </TextParagraph>
            <TextParagraph mt={2}>Come and join the community!</TextParagraph>
          </Box>

          <Box as='section' mt={8}>
            <HStack as='header' justify='space-between' align='center' mb={2}>
              <NextLink href='https://kawalcovid19.id' passHref>
                <Link>
                  <TextHeading as='h2' mb={0}>
                    Kawal COVID-19 <Icon as={FiExternalLink} w={6} h={6} />
                  </TextHeading>
                </Link>
              </NextLink>
              <TextParagraph>Mar 2020</TextParagraph>
            </HStack>
            <TextParagraph>
              Kawal COVID-19 is an Indonesian community initiative to serve
              accurate and factual data about COVID-19
            </TextParagraph>
            <TextParagraph mt={2}>
              As the country started lockdown because of COVID-19, I&apos;ve joined
              the KawalCOVID19 team to help manage and publish their content. In
              addition, I did some help on pushing new features on their
              website.
            </TextParagraph>
          </Box>

          <Box as='section' mt={8}>
            <HStack as='header' justify='space-between' align='center' mb={2}>
              <NextLink href='https://lyrics-finder.angeloanan.xyz' passHref>
                <Link>
                  <TextHeading as='h2' mb={0}>
                    Lyrics Finder <Icon as={FiExternalLink} w={6} h={6} />
                  </TextHeading>
                </Link>
              </NextLink>
              <TextParagraph>Jan 2019</TextParagraph>
            </HStack>
            <TextParagraph>
              Search the lyrics to your music with Lyrics Finder!
            </TextParagraph>
            <TextParagraph mt={2}>
              Lyrics Finder is a Discord bot that&apos;s pretty self explanatory
              &mdash; searches the lyrics to your currently playing Spotify
              music. It works by using the Genius API and scraping it manually
              as there are some caveats on their API (they don&apos;t give out
              lyrics).
            </TextParagraph>
          </Box>
        </Box>
    </>
  )
}

export default ProjectsPage
