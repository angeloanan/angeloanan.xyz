import * as React from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

const ContentSpacer: React.FC<FlexProps> = props => {
  return <Flex maxW='6xl' mx='auto' {...props} />
}

export default ContentSpacer
