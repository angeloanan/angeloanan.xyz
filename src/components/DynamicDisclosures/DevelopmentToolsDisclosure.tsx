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
          <Git className='inline' color='#F05032' aria-hidden /> Git
        </li>
        <li>
          <Visualstudiocode className='inline' color='#007ACC' aria-hidden /> Visual Studio Code
        </li>
        <li>
          <Eslint className='inline' color='#4B32C3' aria-hidden /> ESLint and{' '}
          <Prettier className='inline' color='#F7B93E' aria-hidden /> Prettier
        </li>
        <li>
          <Datadog className='inline' color='#632CA6' aria-hidden /> Datadog
        </li>
        <li>
          <Grafana className='inline' color='#F46800' aria-hidden /> Grafana
        </li>
        <li>
          <Influxdb className='inline' color='#22ADF6' aria-hidden /> InfluxDB
        </li>
      </ul>

      <ul className='mt-4 list-inside list-disc'>
        <li>
          <Notion className='inline' color='#000' aria-hidden /> Notion
        </li>
        <li>
          <Figma className='inline' color='#F24E1E' aria-hidden /> Figma
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default DevelopmentToolsDisclosure
