import { Box, WrapItem } from '@chakra-ui/react'
import * as React from 'react'

const ProjectCard: React.FC = (props) => {
  return (
    <WrapItem>
      <Box minW="xs" borderWidth={2} borderRadius="lg" overflow="hidden" p={2}>
        A Project
      </Box>
    </WrapItem>
  )
}

export default ProjectCard
