import { Adobe, Blender } from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from './'

const ContentCreationDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Content Creation'>
      <ul className='list-inside list-disc'>
        <li>
          <Adobe className='inline' color='#FF0000' aria-hidden /> Adobe Creative Suite (Pr, Ae, Ai,
          Ps)
        </li>
        <li>
          <Blender className='inline' color='#F5792A' aria-hidden /> Blender
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default ContentCreationDisclosure
