import * as React from 'react'

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import NavbarButton from './navbar-button'

const Navbar: React.FC = () => {
  return (
    <>
      <Flex as="nav" maxW="6xl" mx="auto" px={4}>
        <Box py={4}>
          <Heading size="md">Angelo</Heading>
        </Box>
        <Spacer/>
        <Flex>
          <NavbarButton title="Home" link="/"/>
          <NavbarButton title="Projects" link="/projects"/>
          <NavbarButton title="Contact" link="/contact"/>
        </Flex>
      </Flex>

      {/* Horizontal Line */}
      <Flex as="hr" mx="auto"/>
    </>)
}

export default Navbar
