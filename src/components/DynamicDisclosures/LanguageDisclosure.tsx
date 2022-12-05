import {
  C,
  CssThree,
  Dart,
  Flutter,
  Graphql,
  Html5,
  Javascript,
  Latex,
  Nodedotjs,
  Openjdk,
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
          <Html5 className='inline' color='#E34F26' aria-hidden /> HTML5 and{' '}
          <CssThree className='inline' color='#1572B6' aria-hidden /> CSS3
        </li>
        <li>
          <Javascript className='inline' color='#F7DF1E' aria-hidden /> Javascript (ES6+) and{' '}
          <Typescript className='inline' color='#3178C6' aria-hidden /> Typescript
        </li>
        <li>
          <Nodedotjs className='inline' color='#339933' aria-hidden /> NodeJS
        </li>
        <li>
          <Graphql className='inline' color='#E10098' aria-hidden /> GraphQL
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Systems Language</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Rust className='inline' color='#000' aria-hidden /> Rust
        </li>
        <li>
          <Openjdk className='inline' color='#000' aria-hidden /> Java
        </li>
        <li>
          <C className='inline' color='#A8B9CC' aria-hidden /> C (Competitive Programming)
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Others</h3>
      <ul className='list-inside list-disc'>
        <li>SQL</li>
        <li>
          <Latex className='inline' color='#008080' aria-hidden /> LaTeX
        </li>
        <li>
          <Dart className='inline' color='#0175C2' aria-hidden /> Dart (
          <Flutter className='inline' color='#02569B' aria-hidden /> Flutter)
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default LanguageDisclosure
