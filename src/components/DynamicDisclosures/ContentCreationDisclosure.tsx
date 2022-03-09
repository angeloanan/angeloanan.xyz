import { Adobe, Blender } from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from './'

const ContentCreationDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Content Creation'>
      <ul className='list-inside list-disc'>
        <li>
          <Adobe className='inline' aria-hidden /> Adobe Creative Suite (Pr, Ae, Ai, Ps)
        </li>
        <li>
          <Blender className='inline' aria-hidden /> Blender
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default ContentCreationDisclosure
