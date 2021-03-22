import * as React from 'react'

import { Box, Divider, HStack } from '@chakra-ui/react'
import {
  SiAdobeillustrator,
  SiAdobepremiere,
  SiArduino,
  SiBlender,
  SiC,
  SiCloudflare,
  SiCss3,
  SiDatadog,
  SiDebian,
  SiDocker,
  SiEslint,
  SiFigma,
  SiFilezilla,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGrafana,
  SiGraphql,
  SiHtml5,
  SiInfluxdb,
  SiJava,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMariadb,
  SiMongodb,
  SiMusescore,
  SiNetlify,
  SiNextDotJs,
  SiNodeDotJs,
  SiNotion,
  SiPostgresql,
  SiPowershell,
  SiRaspberrypi,
  SiReact,
  SiRust,
  SiStyledComponents,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVisualstudiocode,
  SiVultr,
  SiWindows,
  SiZeit
} from 'react-icons/si'
import { TextHeading, TextLink, TextParagraph } from '../components/typography'

import ContentSpacer from '../components/ui/content-spacer'
import { GetStaticProps } from 'next'
import { HoverIcon } from '../components/ui/hover-icon'
import { NextSeo } from 'next-seo'
import SpotifyTrack from '../components/ui/spotify-track'
import UpCloudIcon from '../components/icons/upcloud'

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
          continued my journey to learn new languages, contribute to open source
          projects, participating in community moderation and ultimately,
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
          Knowledgebase
        </TextHeading>
        <TextParagraph>
          Below are some of the things that I have used.
          <br />
          <em>Pro tip: Hover over the icons to see what it means!</em>
        </TextParagraph>

        <Box>
          <TextHeading as='h3' mt={4}>
            Languages
          </TextHeading>
          <HStack spacing={4}>
            <HoverIcon label='HTML5' icon={SiHtml5} />
            <HoverIcon label='CSS3' icon={SiCss3} />
            <HoverIcon label='Javascript' icon={SiJavascript} />
            <HoverIcon label='Typescript' icon={SiTypescript} />
            <HoverIcon label='NodeJS' icon={SiNodeDotJs} />
            <HoverIcon label='GraphQL' icon={SiGraphql} />
            <HoverIcon label='C' icon={SiC} />
            <HoverIcon label='Java' icon={SiJava} />
            <HoverIcon label='Rust (Learning)' icon={SiRust} />
          </HStack>
        </Box>

        <HStack justify='space-between' flexWrap='wrap'>
          <Box>
            <TextHeading as='h3' mt={4}>
              Frontend
            </TextHeading>
            <HStack spacing={4} flexWrap='wrap'>
              <HoverIcon label='React' icon={SiReact} />
              <HoverIcon label='Next.JS' icon={SiNextDotJs} />
              <HoverIcon label='Styled Components' icon={SiStyledComponents} />
              <HoverIcon
                label='TailwindCSS (twin.macro / Chakra UI)'
                icon={SiTailwindcss}
              />
            </HStack>
          </Box>

          <Box>
            <TextHeading as='h3' mt={4}>
              Backend
            </TextHeading>
            <HStack spacing={4} flexWrap='wrap'>
              <HoverIcon label='Firebase' icon={SiFirebase} />
              <HoverIcon label='MariaDB / MySQL' icon={SiMariadb} />
              <HoverIcon label='PostgreSQL' icon={SiPostgresql} />
              <HoverIcon label='MongoDB' icon={SiMongodb} />
              <HoverIcon label='InfluxDB' icon={SiInfluxdb} />
            </HStack>
          </Box>
        </HStack>

        <Box>
          <TextHeading as='h3' mt={4}>
            Infrastructure
          </TextHeading>
          <HStack spacing={4} flexWrap='wrap'>
            <HoverIcon label='Cloudflare' icon={SiCloudflare} />
            <HoverIcon label='Vultr' icon={SiVultr} />
            <HoverIcon label='UpCloud' icon={UpCloudIcon} />
            <HoverIcon label='Netlify' icon={SiNetlify} />
            <HoverIcon label='Vercel' icon={SiZeit} />
          </HStack>
        </Box>

        <HStack justify='space-between' flexWrap='wrap'>
          <Box>
            <TextHeading as='h3' mt={4}>
              Programming Tools
            </TextHeading>
            <HStack spacing={4} flexWrap='wrap'>
              <HoverIcon label='Git' icon={SiGit} />
              <HoverIcon label='VSCode' icon={SiVisualstudiocode} />
              <HoverIcon label='ESLint' icon={SiEslint} />
              <HoverIcon label='Jest' icon={SiJest} />
            </HStack>
          </Box>

          <Box>
            <TextHeading as='h3' mt={4}>
              General Tools
            </TextHeading>
            <HStack spacing={4} flexWrap='wrap'>
              <HoverIcon label='Docker' icon={SiDocker} />
              <HoverIcon label='Kubernetes' icon={SiKubernetes} />
              <HoverIcon label='DataDog' icon={SiDatadog} />
              <HoverIcon label='Grafana' icon={SiGrafana} />
              <HoverIcon label='Bash' icon={SiPowershell} />
            </HStack>
          </Box>
        </HStack>

        <Box>
          <TextHeading as='h3' mt={4}>
            Other Services / Software
          </TextHeading>
          <HStack spacing={4} flexWrap='wrap' alignItems='center'>
            <HoverIcon label='GitHub' icon={SiGithub} />
            <HoverIcon label='GitHub Actions' icon={SiGithubactions} />
            <HoverIcon label='Figma' icon={SiFigma} />
            <HoverIcon label='Notion' icon={SiNotion} />
            <HoverIcon label='FileZilla' icon={SiFilezilla} />
            <HoverIcon label='Adobe Premiere Pro' icon={SiAdobepremiere} />
            <HoverIcon label='Adobe Illustrator' icon={SiAdobeillustrator} />
            <HoverIcon label='Musescore' icon={SiMusescore} />
            <HoverIcon label='Blender (Learning)' icon={SiBlender} />
            <HoverIcon label='Arduino (Learning)' icon={SiArduino} />
          </HStack>
        </Box>

        <Box>
          <TextHeading as='h3' mt={4}>
            Operating Systems
          </TextHeading>
          <HStack spacing={4} flexWrap='wrap'>
            <HoverIcon label='Windows' icon={SiWindows} />
            <HoverIcon label='Linux' icon={SiLinux} />
            <HoverIcon label='Debian' icon={SiDebian} />
            <HoverIcon label='Ubuntu' icon={SiUbuntu} />
            <HoverIcon label='Raspbian' icon={SiRaspberrypi} />
          </HStack>
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
