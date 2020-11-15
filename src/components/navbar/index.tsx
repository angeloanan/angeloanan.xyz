import * as React from 'react'

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import NavbarButton from './navbar-button'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <>
      <Flex as="nav" maxW="6xl" mx="auto" px={4}>
        <Link href="/" passHref>
          <Box p={4} as="button">
            <Heading size="md">Angelo</Heading>
          </Box>
        </Link>
        <Spacer/>
        <Flex>
          <NavbarButton title="About" link="/about"/>
          <NavbarButton title="Projects" link="/projects"/>
          <NavbarButton title="Contact" link="/contact"/>
        </Flex>
      </Flex>

      {/* Horizontal Line */}
      <Flex as="hr" mx="auto"/>
    </>)
}

export default Navbar
