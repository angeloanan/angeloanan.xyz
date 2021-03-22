import * as React from 'react'

import Icon from '@chakra-ui/icon'
import { Tooltip } from '@chakra-ui/tooltip'

interface HoverIconProps {
  label: string
  icon: React.ElementType
}

export const HoverIcon: React.FC<HoverIconProps> = props => {
  return (
    <Tooltip hasArrow placement='top' label={props.label} closeOnClick={false}>
      <span>
        <Icon as={props.icon} boxSize={8} />
      </span>
    </Tooltip>
  )
}
