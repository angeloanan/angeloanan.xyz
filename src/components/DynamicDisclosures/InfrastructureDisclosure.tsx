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

import { KnowledgebaseDisclosure } from './'

const InfrastructureDisclosure = () => {
  return (
    <KnowledgebaseDisclosure title='Infrastructure'>
      <h3 className='font-header '>Host</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Cloudflare className='inline' aria-hidden /> Cloudflare
        </li>
        <li>
          <Upcloud className='inline' aria-hidden /> Upcloud
        </li>
        <li>
          <Vultr className='inline' aria-hidden /> Vultr
        </li>
        <li>
          <Ovh className='inline' aria-hidden /> OVH
        </li>
      </ul>

      <h3 className='mt-4 font-header'>CI/CD</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Githubactions className='inline' aria-hidden /> GitHub actions
        </li>
        <li>
          <Docker className='inline' aria-hidden /> Docker
        </li>
        <li>
          <Kubernetes className='inline' aria-hidden /> Kubernetes
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Serverless Solutions</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Cloudflare className='inline' aria-hidden /> Cloudflare
        </li>
        <li>
          <Vercel className='inline' aria-hidden /> Vercel
        </li>
        <li>
          <Netlify className='inline' aria-hidden /> Netlify
        </li>
      </ul>

      <h3 className='mt-4 font-header'>Operating Systems</h3>
      <ul className='list-inside list-disc'>
        <li>
          <Windows className='inline' aria-hidden /> Windows
        </li>
        <li>
          <Linux className='inline' aria-hidden /> Linux (Debian, Ubuntu, Raspbian)
        </li>
      </ul>
    </KnowledgebaseDisclosure>
  )
}

export default InfrastructureDisclosure
