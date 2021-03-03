import * as React from 'react'

import { Box, Divider, Link, Text } from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import SpotifyTrack from '../components/ui/spotify-track'

interface AboutPageProps {
  lastfm: Array<{
    title: string
    artist: string
    image: string
    url: string
  }>
}

const AboutPage: React.FC<AboutPageProps> = ({ lastfm: topTracks }) => {
  return (
    <>
      <NextSeo title='About Me' />
      <ContentSpacer>
        <TextHeading as='h1'>About Me</TextHeading>
        <TextParagraph>
          Hi, I'm Christopher Angelo - A full-stack web developer based on
          Jakarta, Indonesia. I've started to learn how to code out of curiosity
          when I was 13 years old.
        </TextParagraph>

        <Box mt={8} fontWeight='400'>
          <Text as='span' fontWeight='400'>
            See my CV at
          </Text>{' '}
          <NextLink href='https://cv.angelo.fyi' passHref>
            <Link color='blue.200'>cv.angelo.fyi</Link>
          </NextLink>
        </Box>

        <Divider mt={8} />

        <Box mt={8}>
          <TextHeading as='h2'>What I've been listening</TextHeading>
          <TextParagraph mb={4}>
            Wondering what's my music taste like? Here's my top 5 played music
            this week!{' '}
          </TextParagraph>
          {/* TODO: Improve Copywriting */}

          {topTracks.map(track => {
            return (
              <SpotifyTrack
                key={track.url}
                title={track.title}
                artist={track.artist}
                image={track.image}
                url={track.url}
              />
            )
          })}
        </Box>

        <TextParagraph as='em' mt={8}>
          This page is still work in progress...
        </TextParagraph>
      </ContentSpacer>
    </>
  )
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const craftedEnpointURL = `http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=angeloanan&api_key=${process
    .env.LASTFM_KEY as string}&format=json`
  const fetchData = await (await fetch(craftedEnpointURL)).json()

  const trackList = fetchData.weeklytrackchart.track
  trackList.length = 5

  const convertedTrackList = await Promise.all([
    ...trackList.map(async track => {
      const trackInfoFetch = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process
          .env
          .LASTFM_KEY as string}&track=${track.name as string}&artist=${track
          .artist['#text'] as string}&format=json`
      )
      const { track: trackInfo } = await trackInfoFetch.json()

      return {
        title: track.name,
        artist: track.artist['#text'],
        image:
          trackInfo?.album?.image?.[1]['#text'] ?? '/img/unknown-album.webp',
        url: track.url
      }
    })
  ])

  return {
    props: {
      lastfm: convertedTrackList
    },
    revalidate: 300 // 5 Mins
  }
}

export default AboutPage
