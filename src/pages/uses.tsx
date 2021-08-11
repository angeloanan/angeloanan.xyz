import * as React from 'react'

import {
  Box,
  Divider,
  List,
  ListIcon,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { TextHeading, TextParagraph } from '../components/typography'

import { FiPlus } from 'react-icons/fi'
import { NextSeo } from 'next-seo'

const UsesPage: React.FC = () => {
  return (
    <>
      <NextSeo title='/uses' />
      <Box as='header'>
        <TextHeading as='h1'>Things That Angelo Uses</TextHeading>
        <TextParagraph>
          Here is a list on the things I&apos;ve used currently
        </TextParagraph>
      </Box>

      <Box as='main' mt={8}>
        <Box as='section'>
          <TextHeading as='h2'>Hardware</TextHeading>

          <Box as='section'>
            <TextHeading as='h3'>Main Setup (PC)</TextHeading>
            <UnorderedList>
              <ListItem>AMD Ryzen 7 3700X</ListItem>
              <ListItem>MSI GeForce GTX 1660 Ventus XS 6</ListItem>
              <ListItem>KLEVV BOLT X DDR4 (32GB)</ListItem>
              <ListItem>LG 22MK430 (22&quot;)</ListItem>
              <ListItem>Keychron v2 Blue Mechanical Keyboard</ListItem>
              <ListItem>Glorious Model O Matte Black</ListItem>
            </UnorderedList>
          </Box>

          <Box as='section' mt={4}>
            <TextHeading as='h3'>Secondary Setup (Laptop)</TextHeading>
            <UnorderedList>
              <ListItem>Lenovo Ideapad 310 (15&quot; 2015)</ListItem>
              <List>
                <ListItem>
                  <ListIcon as={FiPlus} />
                  WD Green 240GB SSD
                </ListItem>
                <ListItem>
                  <ListIcon as={FiPlus} />
                  Corsair 8GB RAM
                </ListItem>
              </List>
              <ListItem>Glorious Model O Matte Black</ListItem>
            </UnorderedList>
          </Box>

          <Box as='section' mt={4}>
            <TextHeading as='h3'>Other Gadgets</TextHeading>
            <UnorderedList>
              <ListItem>Bang &amp; Olufsen Beoplay H3</ListItem>
              <ListItem>
                Raspberry Pi 3B (FreeRADIUS, PiHole, Docker, Grafana, InfluxDB,
                Logging)
              </ListItem>
              {/* <ListItem>OVH VPS (Docker, Lyrics Finder Bot)</ListItem>
              <ListItem>UpCloud VPS (Minecraft Server)</ListItem> */}
            </UnorderedList>
          </Box>
        </Box>

        <Divider mt={8} />

        <Box as='section' mt={8}>
          <TextHeading as='h2' mb={2}>
            Tools and Stuff (Software)
          </TextHeading>
          <TextParagraph>
            Please do keep in mind, I am using DVORAK keyboard layout to write
            stuff
          </TextParagraph>

          <Box as='section' mt={4}>
            <TextHeading as='h3'>Coding</TextHeading>
            <UnorderedList>
              <ListItem>
                Editor: Visual Studio Code (Personal Extension Pack)
              </ListItem>
              <ListItem>Terminal: Windows Terminal / zsh (dotfiles)</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default UsesPage
