import {
  Cloudflare,
  Docker,
  Githubactions,
  Kubernetes,
  Linux,
  Netlify,
  Ovh,
  Upcloud,
  Vercel,
  Vultr,
  Windows
} from '@icons-pack/react-simple-icons'

import { KnowledgebaseDisclosure } from '.'

const InfrastructureDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Infrastructure'>
      <h3 className='font-header '>Host</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Cloudflare className='inline' color='#F38020' aria-hidden /> Cloudflare
        </li>
        <li>
          <Upcloud className='inline' color='#7B00FF' aria-hidden /> Upcloud
        </li>
        <li>
          <Vultr className='inline' color='#007BFC' aria-hidden /> Vultr
        </li>
        <li>
          <Ovh className='inline' color='#123F6D' aria-hidden /> OVH
        </li>
      </ul>

      <h3 className='mt-4 font-header'>CI/CD</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Githubactions className='inline' color='#2088FF' aria-hidden /> GitHub actions
        </li>
        <li>
          <Docker className='inline' color='#2496ED' aria-hidden /> Docker
        </li>
        <li>
          <Kubernetes className='inline' color='#326CE5' aria-hidden /> Kubernetes
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Serverless Solutions</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Cloudflare className='inline' color='#F38020' aria-hidden /> Cloudflare
        </li>
        <li>
          <Vercel className='inline' color='#000' aria-hidden /> Vercel
        </li>
        <li>
          <Netlify className='inline' color='#00C7B7' aria-hidden /> Netlify
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Operating Systems</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Windows className='inline' color='#0078D6' aria-hidden /> Windows
        </li>
        <li>
          <Linux className='inline' aria-hidden /> Linux (Debian, Ubuntu, Raspbian)
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default InfrastructureDisclosure
