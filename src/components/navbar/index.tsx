import * as React from 'react'

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import Link from 'next/link'
import NavbarButton from './navbar-button'

const Navbar: React.FC = () => {
  return (
    <Flex as='nav' maxW='4xl' mx='auto' my={16}>
      <Link href='/' passHref>
        <Box p={4} as='button'>
          <Heading size='md' as="p">Angelo</Heading>
        </Box>
      </Link>
      <Spacer />
      <Flex>
        <NavbarButton title='About' link='/about' />
        <NavbarButton title='Projects' link='/projects' />
        <NavbarButton title='Contact' link='/contact' />
      </Flex>
    </Flex>
  )
}

export default Navbar
