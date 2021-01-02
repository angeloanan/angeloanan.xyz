import * as React from 'react'

import { Text, TextProps } from '@chakra-ui/react'

export const TextParagraph: React.FC<TextProps> = props => {
  return (
    <Text color='gray' opacity={0.7} letterSpacing={0.2} as='p' {...props} />
  )
}
