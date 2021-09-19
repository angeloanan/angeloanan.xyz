import * as React from 'react'

import {
  Box,
  Divider,
  List,
  ListIcon,
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

const UsesPage: React.FC = () => {
  return (
    <>
      <NextSeo title='/uses' />
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

        {/* Software & Service */}
        <Box as='section' mt={10}>
          <TextHeading as='h2' mb={2}>
            Software and Services
          </TextHeading>
          <TextParagraph>
            Dedicated to programs, services and sites that I have
          </TextParagraph>

          <Box as='section' mt={6}>
            <TextHeading as='h3' mb={2}>
              Development
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='Browser'>
                Chrome / Firefox Dev Edition
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Code Editor'>
                Visual Studio Code
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Design Tools'>
                Figma, Adobe Illustrator
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Terminal'>
                Windows Terminal / WSL2 / zsh
              </ListItemWithPrefix>
            </UnorderedList>

            <TextHeading as='h3' mb={2} mt={4}>
              Content Creation
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='Screen recorder'>
                OBS Studio
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='DAW'>
                FL Studio / REAPER
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Video Processing'>
                Adobe Creative Suite
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Messing around'>
                Blender, MikuMikuDance
              </ListItemWithPrefix>
            </UnorderedList>

            <TextHeading as='h3' mb={2} mt={4}>
              Self-service
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='Note-taking'>
                Notion
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Email client'>
                Zoho Mail
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Music streaming'>
                Spotify &rarr; Qobuz (soon!)
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Time management'>
                Google Calendar
              </ListItemWithPrefix>
            </UnorderedList>
          </Box>
        </Box>

        <Divider mt={8} />

        {/* Hardware */}
        <Box as='section' mt={8}>
          <TextHeading as='h2' mb={2}>
            Hardwares
          </TextHeading>
          <TextParagraph>Physical things that can be touched!</TextParagraph>

          <Box as='section' mt={8}>
            <TextHeading as='h3' mb={2}>
              PC: Custom Gaming Rig
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='CPU'>
                AMD Ryzen 7 3700X
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Motherboard'>
                MSI B310 Gaming Plus
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='RAM'>
                KLEVV BOLT X DDR4 (32GB)
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Graphics Card'>
                NVIDIA GeForce GTX 1660
              </ListItemWithPrefix>
            </UnorderedList>

            <TextHeading as='h3' mb={2} mt={4}>
              Laptop: Lenovo Ideapad 310 (15&quot; 2015)
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='Upgrade 1'>
                WD Green 240GB SSD
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Upgrade 2'>
                Corsair 8GB RAM
              </ListItemWithPrefix>
            </UnorderedList>

            <TextHeading as='h3' mb={2} mt={4}>
              Peripherals
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='Monitor 1'>
                ASUS TUF Gaming VG27A
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Monitor 2'>
                LG 22MK430 (22&quot;)
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Keyboard'>
                Keychron v2 Mechanical Keyboard (Blue)
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Mouse'>
                Glorious Model O Matte Black
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Mic'>
                Samson G-Track Pro
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Over-Ear'>
                Samsung WH-1000XM4 Headphones
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='IEMs'>KZ ZSN Pro</ListItemWithPrefix>
            </UnorderedList>

            <TextHeading as='h3' mb={2} mt={4}>
              VR Setup
            </TextHeading>
            <UnorderedList>
              <ListItemWithPrefix prefix='HMD'>
                Oculus Quest 2
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Body tracker'>
                SlimeVR Full-Body Tracker (soon!)
              </ListItemWithPrefix>
            </UnorderedList>

            <TextHeading as='h3' mb={2} mt={4}>
              Other stuff
            </TextHeading>
            <UnorderedList>
              <ListItem fontWeight={300}>
                Nintendo Switch - Animal Crossing Edition
              </ListItem>
              <ListItem fontWeight={300}>
                Nintendo Switch Pro Controller
              </ListItem>
              <ListItemWithPrefix prefix='3x3 cube'>
                YJ MGC 3 Elite 3x3 Stickerless
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='4x4 cube'>
                YJ MGC 4x4 M Stickerless
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='5x5 cube'>
                YJ MGC 5x5 M Stickerless
              </ListItemWithPrefix>
              <ListItemWithPrefix prefix='Cube lube'>
                LUNAR by SpeedCubeShop
              </ListItemWithPrefix>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default UsesPage
