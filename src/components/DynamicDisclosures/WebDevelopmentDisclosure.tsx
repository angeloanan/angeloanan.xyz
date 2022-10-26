import {
  Chakraui,
  Cloudflare,
  Firebase,
  Nextdotjs,
  ReactJs,
  Styledcomponents,
  Tailwindcss
} from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from '.'

const WebDevelopmentDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Web Development'>
      <h3 className='font-header'>Frontend</h3>
      <ul className='list-inside list-disc'>
        <li>
          <ReactJs className='inline' color='#61DAFB' aria-hidden /> React
        </li>
        <li>
          <Nextdotjs className='inline' color='#000' aria-hidden /> NextJS
        </li>
        <li>
          <Styledcomponents className='inline' color='#DB7093' aria-hidden /> Styled Components
        </li>
        <li>
          <Chakraui className='inline' color='#319795' aria-hidden /> Chakra UI
        </li>
        <li>
          <Tailwindcss className='inline' color='#06B6D4' aria-hidden /> Tailwind CSS
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Backend</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Firebase className='inline' color='#FFCA28' aria-hidden /> Firebase
        </li>
        <li>
          <Cloudflare className='inline' color='#F38020' aria-hidden /> Cloudflare Workers &amp;
          Pages
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default WebDevelopmentDisclosure
