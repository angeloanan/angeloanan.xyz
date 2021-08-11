import * as React from 'react'

import { Text, TextProps } from '@chakra-ui/react'

export const TextParagraph: React.FC<TextProps> = props => {
  return <Text color='text.secondary' letterSpacing={0.2} {...props} />
}
