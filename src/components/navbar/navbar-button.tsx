import * as React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavbarButtonProps {
  title: string
  link: string
}

const NavbarButton: React.FC<NavbarButtonProps> = (
  props: NavbarButtonProps
) => {
  const isActive = useRouter().pathname === props.link

  return (
    <Link href={props.link} passHref>
      <Flex as='button' _hover={{ bg: 'gray.500' }} p={4}>
        {isActive && (
          <Text size='md' as='i'>
            {props.title}
          </Text>
        )}
        {!isActive && <Text fontSize='md'> {props.title} </Text>}
      </Flex>
    </Link>
  )
}

export default NavbarButton
