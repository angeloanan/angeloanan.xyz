import {
  C,
  CssThree,
  Dart,
  Flutter,
  Graphql,
  Html5,
  Java,
  Javascript,
  Latex,
  Nodedotjs,
  Rust,
  Typescript
} from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from './'

const LanguageDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Languages'>
      <h3 className='font-header'>Web Development</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Html5 className='inline' aria-hidden /> HTML5 and{' '}
          <CssThree className='inline' aria-hidden /> CSS3
        </li>
        <li>
          <Javascript className='inline' aria-hidden /> Javascript (ES6+) and{' '}
          <Typescript className='inline' aria-hidden /> Typescript
        </li>
        <li>
          <Nodedotjs className='inline' aria-hidden /> NodeJS
        </li>
        <li>
          <Graphql className='inline' aria-hidden /> GraphQL
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Systems Language</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Rust className='inline' aria-hidden /> Rust
        </li>
        <li>
          <Java className='inline' aria-hidden /> Java
        </li>
        <li>
          <C className='inline' aria-hidden /> C (Competitive Programming)
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Others</h3>
      <ul className='list-inside list-disc'>
        <li>SQL</li>
        <li>
          <Latex className='inline' aria-hidden /> LaTeX
        </li>
        <li>
          <Dart className='inline' aria-hidden /> Dart (<Flutter className='inline' aria-hidden />{' '}
          Flutter)
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default LanguageDisclosure
