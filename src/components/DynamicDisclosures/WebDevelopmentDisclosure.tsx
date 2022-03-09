import {
  Chakraui,
  Cloudflare,
  Firebase,
  Nextdotjs,
  ReactJs,
  Styledcomponents,
  Tailwindcss
} from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from './'

const WebDevelopmentDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Web Development'>
      <h3 className='font-header'>Frontend</h3>
      <ul className='list-inside list-disc'>
        <li>
          <ReactJs className='inline' aria-hidden /> React
        </li>
        <li>
          <Nextdotjs className='inline' aria-hidden /> NextJS
        </li>
        <li>
          <Styledcomponents className='inline' aria-hidden /> Styled Components
        </li>
        <li>
          <Chakraui className='inline' aria-hidden /> Chakra UI
        </li>
        <li>
          <Tailwindcss className='inline' aria-hidden /> Tailwind CSS
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Backend</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Firebase className='inline' aria-hidden /> Firebase
        </li>
        <li>
          <Cloudflare className='inline' aria-hidden /> Cloudflare Workers &amp; Pages
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default WebDevelopmentDisclosure
