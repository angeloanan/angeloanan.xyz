import { HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import AngeloProfilePic from '../../../../public/pfp.png'

const AngeloAvatar: React.FC = props => {
  return (
    <HStack {...props} aria-hidden>
      <Image
        src={AngeloProfilePic}
        alt="Christopher Angelo's Potrait Photo"
        width='32px'
        height='32px'
      />
      <Text
        fontWeight={300}
        fontFamily='text.secondary'
        fontSize='md'
        letterSpacing={1}
        as='label'
        textTransform='uppercase'
      >
        @angeloanan
      </Text>
    </HStack>
  )
}

export default AngeloAvatar
