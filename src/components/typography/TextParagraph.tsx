import * as React from 'react'

import { Text, TextProps } from '@chakra-ui/react'

export const TextParagraph = (props: TextProps) => {
  return <Text color='text.secondary' letterSpacing={0.2} {...props} />
}
