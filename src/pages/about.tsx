import * as React from 'react'

import { Box, Divider, HStack, Icon, Tooltip } from '@chakra-ui/react'
import {
  Adobeillustrator as SiAdobeillustrator,
  Adobepremierepro as SiAdobepremiere,
  Arduino as SiArduino,
  Blender as SiBlender,
  C as SiC,
  Cloudflare as SiCloudflare,
  CssThree as SiCss3,
  Dart as SiDart,
  Datadog as SiDatadog,
  Debian as SiDebian,
  Docker as SiDocker,
  Eslint as SiEslint,
  Figma as SiFigma,
  Filezilla as SiFilezilla,
  Firebase as SiFirebase,
  Git as SiGit,
  Github as SiGithub,
  Githubactions as SiGithubactions,
  Grafana as SiGrafana,
  Graphql as SiGraphql,
  Html5 as SiHtml5,
  Influxdb as SiInfluxdb,
  Java as SiJava,
  Javascript as SiJavascript,
  Jest as SiJest,
  Kubernetes as SiKubernetes,
  Latex as SiLatex,
  Linux as SiLinux,
  Mariadb as SiMariadb,
  Mongodb as SiMongodb,
  Musescore as SiMusescore,
  Netlify as SiNetlify,
  Nextdotjs as SiNextDotJs,
  Nodedotjs as SiNodeDotJs,
  Notion as SiNotion,
  Ovh as SiOvh,
  Postgresql as SiPostgresql,
  Powershell as SiPowershell,
  Prettier as SiPrettier,
  Raspberrypi as SiRaspberrypi,
  ReactJs as SiReact,
  Rust as SiRust,
  Spotify as SiSpotify,
  Styledcomponents as SiStyledComponents,
  Tailwindcss as SiTailwindcss,
  Typescript as SiTypescript,
  Ubuntu as SiUbuntu,
  Visualstudiocode as SiVisualstudiocode,
  Vultr as SiVultr,
  Windows as SiWindows,
  Vercel as SiZeit,
  Upcloud as SiUpcloud,
  Popos as SiPopos,
  Spotify
} from '@icons-pack/react-simple-icons'
import { TextHeading, TextLink, TextParagraph } from '../components/typography'

import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import SpotifyTrack from '../components/ui/spotify-track'
import Listening from '../components/listening.server.tsx.back'

interface HoverIconProps {
  label: string
  icon: React.ElementType
}

/**
 * Helper for creating an icon
 */
const HoverIcon = (props: HoverIconProps) => {
  return (
    <Tooltip hasArrow placement='top' label={props.label} closeOnClick={false}>
      <span>
        <Icon as={props.icon} boxSize={8} />
      </span>
    </Tooltip>
  )
}

const AboutPage = () => {
  return (
    <>
      <NextSeo title='About Me' />

      <TextHeading as='h1'>About Me</TextHeading>
      <TextParagraph>
        Hi, I&apos;m Christopher Angelo - A full-stack web developer based in
        Bekasi, Indonesia; Currently studying for my bachelors degree in IT at{' '}
        <TextLink href='https://binus.ac.id'>Binus University</TextLink> while
        doing remote web dev work on a Canadian startup.
      </TextParagraph>

      <TextParagraph pt={4}>
        I was curious on how programs are created. When I was 13, I&apos;ve
        taught myself how to code out of curiosity, starting with basic HTML and
        CSS. I then ventured out to learn server-side development / backend by
        learning NodeJS and built{' '}
        <TextLink href='https://lyrics-finder.angeloanan.xyz/about'>
          Lyrics Finder
        </TextLink>
        , a Discord bot which scrapes lyrics from the Internet. It blew up and
        surprisingly went popular. After understanding server side development,
        I continued my journey to learn new languages, contribute to open source
        projects, participating in community moderation and ultimately, creating
        my own things.
      </TextParagraph>

      <TextParagraph pt={4}>
        I joined{' '}
        <TextLink href='https://kawalcovid19.id'>KawalCOVID-19</TextLink>, a
        volunteer effort to serve accurate and reliable information about the
        COVID-19 pandemic in Indonesia, and helped their content team to manage
        and communicate with the team&apos;s developers. I am also{' '}
        <TextLink href='https://feid.dev'>Frontend Indonesia</TextLink>&apos;s
        co-founder&apos;. Frontend Indonesia is a community of Indonesian
        frontend developers which attempts to unify the separated and clustered
        Indonesian community into a one big community.
      </TextParagraph>

      <TextParagraph pt={4}>
        I want to learn everything that&apos;s connected to technology. To this
        day, I&apos;m still learning a lot of things daily while balancing
        between university and work.
      </TextParagraph>

      <TextParagraph pt={4}>
        You can find my CV at{' '}
        <TextLink href='https://cv.angelo.fyi'>cv.angelo.fyi</TextLink>
      </TextParagraph>

      <TextHeading as='h2' mt={8}>
        Knowledgebase
      </TextHeading>
      <TextParagraph>
        Below are some of the things that I have used:
        <br />
        <em>Pro tip: Hover over the icons to see what it means!</em>
      </TextParagraph>

      <Box>
        <TextHeading as='h3' mt={4}>
          Languages
        </TextHeading>
        <HStack spacing={4} flexWrap='wrap'>
          <HoverIcon label='HTML5' icon={SiHtml5} />
          <HoverIcon label='CSS3' icon={SiCss3} />
          <HoverIcon label='Javascript' icon={SiJavascript} />
          <HoverIcon label='Typescript' icon={SiTypescript} />
          <HoverIcon label='NodeJS' icon={SiNodeDotJs} />
          <HoverIcon label='GraphQL' icon={SiGraphql} />
          <HoverIcon label='Dart (Flutter)' icon={SiDart} />
          <HoverIcon label='C (Competitive programming)' icon={SiC} />
          <HoverIcon label='Rust (Learning)' icon={SiRust} />
          <HoverIcon label='Java' icon={SiJava} />
          <HoverIcon label='LaTeX (Katex, Technical Writing)' icon={SiLatex} />
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
          <HoverIcon label='UpCloud' icon={SiUpcloud} />
          <HoverIcon label='OVH' icon={SiOvh} />
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
            <HoverIcon label='Prettier' icon={SiPrettier} />
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
          <HoverIcon label='Arduino' icon={SiArduino} />
          <HoverIcon label='Notion' icon={SiNotion} />
          <HoverIcon label='FileZilla' icon={SiFilezilla} />
          <HoverIcon label='Adobe Premiere Pro' icon={SiAdobepremiere} />
          <HoverIcon label='Adobe Illustrator' icon={SiAdobeillustrator} />
          <HoverIcon label='Musescore' icon={SiMusescore} />
          <HoverIcon label='Blender (Learning)' icon={SiBlender} />
        </HStack>
      </Box>

      <Box>
        <TextHeading as='h3' mt={4}>
          Operating Systems
        </TextHeading>
        <HStack spacing={4} flexWrap='wrap'>
          <HoverIcon label='Windows' icon={SiWindows} />
          <HoverIcon label='Linux' icon={SiLinux} />
          <HoverIcon label='Pop_OS!' icon={SiPopos} />
          <HoverIcon label='Debian' icon={SiDebian} />
          <HoverIcon label='Ubuntu' icon={SiUbuntu} />
          <HoverIcon label='Raspbian' icon={SiRaspberrypi} />
        </HStack>
      </Box>

      <Divider my={8} />

      <Box>
        <HStack>
          <Icon as={Spotify} color='spotify' boxSize='10' mr={2} />
          <TextHeading as='h2'>What I&apos;ve been listening</TextHeading>
        </HStack>
        <TextParagraph my={4}>
          Wondering what&apos;s my music taste like? Here&apos;s my top 5 played
          music this week!{' '}
        </TextParagraph>

        {topTracks.data?.map(track => {
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
    </>
  )
}
export default AboutPage
