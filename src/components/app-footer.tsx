import * as React from 'react'

import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import { HStack, Icon, Link, VStack, VisuallyHidden } from '@chakra-ui/react'

import NextLink from 'next/link'
import footerLinks from '../_data/footerLinks.json'

const SocialMediaSection: React.FC = () => {
  return (
    <HStack spacing={4} justify='center'>
      <NextLink href='https://github.com/angeloanan' passHref>
        <a>
          <VisuallyHidden>GitHub</VisuallyHidden>
          <Icon as={FiGithub} boxSize={5} />
        </a>
      </NextLink>
      <NextLink href='https://twitter.com/UwUngelo' passHref>
        <a>
          <VisuallyHidden>Twitter</VisuallyHidden>
          <Icon as={FiTwitter} boxSize={5} />
        </a>
      </NextLink>
      <NextLink href='https://linkedin.com/in/angeloanan' passHref>
        <a>
          <VisuallyHidden>Linkedin</VisuallyHidden>
          <Icon as={FiLinkedin} boxSize={5} />
        </a>
      </NextLink>
      <NextLink href='mailto:angelo@angeloanan.xyz' passHref>
        <a>
          <VisuallyHidden>Email</VisuallyHidden>
          <Icon as={FiMail} boxSize={5} />
        </a>
      </NextLink>
    </HStack>
  )
}

export const AppFooter: React.FC = () => {
  return (
    <VStack as='footer' color="text.secondary" mt={16} mb={8} spacing={4}>
      <SocialMediaSection />
      <HStack spacing={4} justify='center'>
        {footerLinks.map(link => (
          <NextLink key={link} href={link} passHref>
            <Link fontSize='sm'>
              {link}
            </Link>
          </NextLink>
        ))}
      </HStack>
    </VStack>
  )
}
