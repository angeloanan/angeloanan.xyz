import * as React from 'react'

import { Heading, TextProps } from '@chakra-ui/react'

const resolveFontSize = (elementName: React.ElementType = 'h1'): string => {
  switch (elementName) {
    case 'h2':
      return '4xl'
    case 'h3':
      return '2xl'
    default:
      return '5xl'
  }
}

export const TextHeading: React.FC<TextProps> = props => {
  const fontSize = resolveFontSize(props.as)

  return (
    <Heading
      letterSpacing={-1.2}
      fontSize={fontSize}
      fontWeight={700}
      mb={5}
      {...props}
    />
  )
}
