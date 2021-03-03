import * as React from 'react'

import { Box, Divider } from '@chakra-ui/react'
import { TextHeading, TextLink, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import { GetStaticProps } from 'next'
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
          Hi, I'm Christopher Angelo - A full-stack web developer based in
          Bekasi, Indonesia; Currently studying for my bachelors degree in IT at{' '}
          <TextLink href='https://binus.ac.id'>Binus University</TextLink> while
          doing remote web dev work on a Canadian startup.
        </TextParagraph>

        <TextParagraph pt={4}>
          I've self taught myself to code out of curiosity when I was 13 years
          old (HTML and CSS). I then ventured out to learn backend stuff and
          built{' '}
          <TextLink href='https://lyrics-finder.angeloanan.xyz/about'>
            Lyrics Finder
          </TextLink>
          , a Discord bot that scrapes lyrics from the Internet. It surprisingly
          went popular due to the already existing music bots did not have a
          reliable lyrics searching function. After understanding backend, I
          continued my journey to learn new languages, contribute to open
          source projects, participating in community moderation and ultimately,
          creating my own things.
        </TextParagraph>

        <TextParagraph pt={4}>
          I joined{' '}
          <TextLink href='https://kawalcovid19.id'>Kawal COVID-19</TextLink>, a
          volunteer effort to serve accurate and reliable information about the
          COVID-19 pandemic in Indonesia, and helped their content team to
          manage and communicate with our developers. I am also a co-founder of{' '}
          <TextLink href='https://feid.dev'>Frontend Indonesia</TextLink>, an
          Indonesian community of frontend developers which attempts to unify
          the separated and clustered Indonesian community into a one big
          community.
        </TextParagraph>

        <TextParagraph pt={4}>
          I want to learn everything that's connected to technology. To this
          day, I'm still learning a lot of things daily while balancing between
          university and work.
        </TextParagraph>

        <TextParagraph pt={4}>
          You can find my CV at{' '}
          <TextLink href='https://cv.angelo.fyi'>cv.angelo.fyi</TextLink>
        </TextParagraph>

        <TextHeading as='h2' mt={8}>
          Skills and Stuff
        </TextHeading>
        <TextParagraph>
          Please refer to the <TextLink href='/uses'>/uses page!</TextLink>
        </TextParagraph>

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
    ...trackList.map(async (track: Record<string, any>) => {
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
