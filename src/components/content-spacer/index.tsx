import * as React from 'react'

import { Flex, VStack } from '@chakra-ui/core'

const ContentSpacer: React.FC = (props) => {
  return (
    <Flex maxW="6xl" mx="auto">
      <VStack spacing={2}>
        {props.children}
      </VStack>
    </Flex>
  )
}

export default ContentSpacer
