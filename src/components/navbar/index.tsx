import * as React from 'react'

import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavbarButtonProps {
  title: string
  link: string
}

const NavbarButton = (props: NavbarButtonProps) => {
  const isActive = useRouter().pathname === props.link

  return (
    <Link href={props.link} passHref>
      <Box
        as='a'
        _hover={{ bg: 'accent.800' }}
        transition='all'
        transitionDuration='0.1s'
        p={4}
        aria-label={props.title}
      >
        {isActive ? (
          <Text fontSize='md' as='em' fontWeight={600} aria-hidden>
            {props.title}
          </Text>
        ) : (
          <Text fontSize='md' aria-hidden>
            {props.title}
          </Text>
        )}
      </Box>
    </Link>
  )
}

const Navbar = () => {
  return (
    <Flex as='nav' maxW='4xl' mx='auto' py={16}>
      <Link href='/' passHref>
        <Box p={4} as='a' aria-label='Home'>
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
