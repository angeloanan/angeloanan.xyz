import * as React from 'react'

import { Avatar, HStack, StackProps, Text } from '@chakra-ui/react'

export const AngeloAvatar: React.FC<StackProps> = props => {
  return (
    <HStack {...props} aria-hidden>
      <Avatar size='sm' name='Christopher Angelo' src='/pfp.png' />
      <Text
        opacity={0.7}
        fontWeight={300}
        fontSize='md'
        letterSpacing={1}
        as='label'
      >
        @ANGELOANAN
      </Text>
    </HStack>
  )
}
