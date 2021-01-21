import * as React from 'react'

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import Link from 'next/link'
import NavbarButton from './navbar-button'

const Navbar: React.FC = () => {
  return (
    <Flex as='nav' maxW='4xl' mx='auto' py={16}>
      <Link href='/' passHref>
        <Box p={4} as='button' aria-label='Home'>
          <Heading size='md' as='p' aria-hidden>
            Angelo
          </Heading>
        </Box>
      </Link>
      <Spacer />
      <Flex as='section' aria-label='Navbar Buttons'>
        <NavbarButton title='About' link='/about' />
        <NavbarButton title='Projects' link='/projects' />
        <NavbarButton title='Contact' link='/contact' />
      </Flex>
    </Flex>
  )
}

export default Navbar
