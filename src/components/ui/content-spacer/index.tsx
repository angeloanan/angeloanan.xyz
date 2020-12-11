import * as React from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

const ContentSpacer: React.FC<FlexProps> = props => {
  return <Flex maxW='2xl' mx='auto' flexDir='column' {...props} />
}

export default ContentSpacer
