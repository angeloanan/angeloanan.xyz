import { Disclosure } from '@headlessui/react'
import useSound from 'use-sound'

export const KnowledgebaseDisclosure: React.FC<{ title: string }> = ({ title, children }) => {
  const [playSpread] = useSound('sfx/spread.mp3', {
    volume: 0.75,
    interrupt: true
  })

  return (
    <Disclosure>
      <Disclosure.Button className='relative z-10 mt-4 flex w-full justify-between rounded-t-lg bg-white px-4 py-2 text-left text-sm font-medium text-fuchsia-600'>
        {title}
      </Disclosure.Button>

      <Disclosure.Panel className='rounded-b-lg bg-fuchsia-50 p-4'>
        {({ open }) => {
          playSpread()

          return children
        }}
      </Disclosure.Panel>
    </Disclosure>
  )
}
