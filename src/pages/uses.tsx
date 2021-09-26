import * as React from 'react'

import {
  Box,
  Divider,
  ListItem,
  Text,
  UnorderedList,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import usesHeaderImage from '../../public/img/uses_header.webp'
import { TextHeading, TextParagraph } from '../components/typography'

import { NextSeo } from 'next-seo'

const ListItemWithPrefix = ({ prefix, ...rest }) => (
  <ListItem>
    <Text as='i' color='gray.400'>
      {prefix}:
    </Text>{' '}
    <Text as='span' {...rest}></Text>
  </ListItem>
)

interface UsesData {
  title: string
  desc: string
  content: Record<string, Record<string, string>>
}
const data: UsesData[] = [
  {
    title: 'Software and Services',
    desc: 'Dedicated to programs, services and sites that I have',
    content: {
      Development: {
        Browser: 'Chrome, Firefox Dev Edition',
        'Code Editor': 'Visual Studio Code',
        'Design Tools': 'Figma, Adobe Illustrator',
        Terminal: 'Windows Terminal w/ WSL2 + zsh'
      },
      'Content Creation': {
        'Screen recorder': 'OBS Studio',
        'Capture card': 'GENKI Shadowcast',
        DAW: 'FL Studio, Reaper',
        'Video Processing': 'Adobe Creative Suite',
        'Other / Messing around': 'Blender, Mine-imator, MikuMikuDance'
      },
      'Self-service': {
        'Note-taking': 'Notion',
        'Email client': 'Zoho Mail',
        'Time management': 'Google Calendar',
        'Music streaming': 'Spotify → Qobuz (soon!)',
        'Home entertainment': 'Jellyfin'
      }
    }
  },
  {
    title: 'Hardwares',
    desc: 'Physical things that can be touched!',
    content: {
      'PC: Custom Gaming Rig': {
        CPU: 'AMD Ryzen 7 3700X',
        Motherboard: 'MSI B450 Gaming Plus MAX',
        RAM: 'KLEVV BOLT X DDR4 (32GB)',
        'Graphics Card': 'NVIDIA GeForce GTX 1660'
      },
      'Laptop: Lenovo Ideapad 310 (15" 2015)': {
        'Upgrade 1': 'WD Green 240GB SSD',
        'Upgrade 2': 'Corsair 8GB RAM'
      },
      Peripherals: {
        'Monitor 1': 'ASUS TUF Gaming VG27A',
        'Monitor 2': 'LG 22MK430 (22")',
        Keyboard: 'Keychron v2 Mechanical Keyboard (Blue)',
        Mouse: 'Glorious Model O Matte Black',
        Mic: 'Samson G-Track Pro',
        'Over-Ear': 'Samsung WH-1000XM4 Headphones',
        IEMs: 'KZ ZSN Pro'
      },
      'VR Setup': {
        HMD: 'Oculus Quest 2',
        'Body tracker': 'SlimeVR Full-Body Tracker (soon!)'
      },
      'Other stuff': {
        Console: 'Nintendo Switch - Animal Crossing Edition',
        Controller: 'Nintendo Switch Pro Controller',
        '3x3 cube': 'YJ MGC 3 Elite 3x3 Stickerless',
        '4x4 cube': 'YJ MGC 4x4 M Stickerless',
        '5x5 cube': 'YJ MGC 5x5 M Stickerless',
        'Cube lube': 'LUNAR by SpeedCubeShop'
      }
    }
  }
]

const CategoryContent = ({ categoryData }) => (
  <UnorderedList>
    {Object.keys(categoryData).map(k => (
      <ListItem key={k}>
        <Text as='i' color='gray.400'>
          {k}:
        </Text>{' '}
        <Text as='span'>{categoryData[k]}</Text>
      </ListItem>
    ))}
  </UnorderedList>
)

const UsesPage = () => {
  return (
    <>
      <NextSeo
        title='/uses'
        openGraph={{
          title: '/uses - Things that Angelo uses',
          description: 'These are some things that I have on my desk',
          images: [
            {
              url: 'https://angeloanan.xyz/img/uses_header.webp',
              alt: "A picture of Angelo's desk"
            }
          ]
        }}
      />
      <Box as='header'>
        <TextHeading as='h1'>/uses</TextHeading>
        <TextParagraph>
          Hardware, softwares and fidgeting toy that I mostly use daily
        </TextParagraph>
      </Box>

      <Box as='main' mt={8}>
        {/* Image */}
        <VStack justifyContent='center'>
          <Box display='block' w='full'>
            <Image
              src={usesHeaderImage}
              alt='My current (messy) desk setup'
              placeholder='blur'
              layout='responsive'
            />
          </Box>
          <Text as='i' color='gray.300' fontSize='sm' align='center'>
            My current (messy) desk setup with AEsthetically pleasing background
            image
          </Text>
        </VStack>

        {data.map(v => (
          <Box key={v.title} as='section' mt={10}>
            <TextHeading as='h2' mb={2}>
              {v.title}
            </TextHeading>
            <TextParagraph>{v.desc}</TextParagraph>

            <Box mt={6}>
              {Object.keys(v.content).map(categoryTitle => (
                <>
                  <TextHeading as='h3' mb={2} mt={4} key={categoryTitle}>
                    {categoryTitle}
                  </TextHeading>
                  <CategoryContent categoryData={v.content[categoryTitle]} />
                </>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default UsesPage
