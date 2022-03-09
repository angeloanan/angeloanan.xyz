import {
  Datadog,
  Eslint,
  Figma,
  Git,
  Grafana,
  Influxdb,
  Notion,
  Prettier,
  Visualstudiocode
} from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from '.'

const DevelopmentToolsDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Development Tools'>
      <ul className='list-inside list-disc'>
        <li>
          <Git className='inline' aria-hidden /> Git
        </li>
        <li>
          <Visualstudiocode className='inline' aria-hidden /> Visual Studio Code
        </li>
        <li>
          <Eslint className='inline' aria-hidden /> ESLint and{' '}
          <Prettier className='inline' aria-hidden /> Prettier
        </li>
        <li>
          <Datadog className='inline' aria-hidden /> Datadog
        </li>
        <li>
          <Grafana className='inline' aria-hidden /> Grafana
        </li>
        <li>
          <Influxdb className='inline' aria-hidden /> InfluxDB
        </li>
      </ul>

      <ul className='mt-4 list-inside list-disc'>
        <li>
          <Notion className='inline' aria-hidden /> Notion
        </li>
        <li>
          <Figma className='inline' aria-hidden /> Figma
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default DevelopmentToolsDisclosure
