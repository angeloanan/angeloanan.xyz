import * as React from 'react'

import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import { HStack, Icon, Link, VisuallyHidden } from '@chakra-ui/react'

import NextLink from 'next/link'
import footerLinks from '../_data/footerLinks.json'

const SocialMediaSection: React.FC = () => {
  return (
    <HStack mb={4} spacing={4} justify='center'>
      <NextLink href='https://github.com/angeloanan' passHref>
        <a>
          <VisuallyHidden>GitHub</VisuallyHidden>
          <Icon as={FiGithub} opacity={0.7} w={5} h={5} />
        </a>
      </NextLink>
      <NextLink href='https://twitter.com/UwUngelo' passHref>
        <a>
          <VisuallyHidden>Twitter</VisuallyHidden>
          <Icon as={FiTwitter} opacity={0.7} w={5} h={5} />
        </a>
      </NextLink>
      <NextLink href='https://linkedin.com/in/angeloanan' passHref>
        <a>
          <VisuallyHidden>Linkedin</VisuallyHidden>
          <Icon as={FiLinkedin} opacity={0.7} w={5} h={5} />
        </a>
      </NextLink>
      <NextLink href='mailto:angelo@angeloanan.xyz' passHref>
        <a>
          <VisuallyHidden>Email</VisuallyHidden>
          <Icon as={FiMail} opacity={0.7} w={5} h={5} />
        </a>
      </NextLink>
    </HStack>
  )
}

export const AppFooter: React.FC = () => {
  return (
    <>
      <SocialMediaSection />
      <HStack mb={8} spacing={4} justify='center'>
        {footerLinks.map(link => (
          <NextLink href={link} passHref>
            <Link fontSize='sm' opacity={0.7}>
              {link}
            </Link>
          </NextLink>
        ))}
      </HStack>
    </>
  )
}
