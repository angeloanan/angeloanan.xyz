import * as React from 'react'

import { Text, TextProps } from '@chakra-ui/react'

export const TextParagraph: React.FC<TextProps> = props => {
  return <Text color='gray.200' letterSpacing={0.2} as='p' {...props} />
}
