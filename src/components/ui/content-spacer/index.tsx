import * as React from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

const ContentSpacer: React.FC<FlexProps> = props => {
  return (
    <Flex px={8} maxW='2xl' mx='auto' flexDir='column' {...props} as='main' />
  )
}

export default ContentSpacer
