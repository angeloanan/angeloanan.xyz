import * as React from 'react'

import { Heading, TextProps } from '@chakra-ui/react'

interface TextHeadingProps extends TextProps {
  asstyle?: React.ElementType
}

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

const resolveFontWeight = (elementName: React.ElementType = 'h1'): number => {
  switch (elementName) {
    case 'h3':
      return 600
    default:
      return 700
  }
}

export const TextHeading: React.FC<TextHeadingProps> = props => {
  const fontSize = resolveFontSize(props.asstyle ?? props.as)
  const fontWeight = resolveFontWeight(props.asstyle ?? props.as)

  return (
    <Heading
      letterSpacing={fontSize === '2xl' ? 0 : -1.2}
      fontSize={fontSize}
      fontWeight={fontWeight}
      mb={5}
      {...props}
    />
  )
}
