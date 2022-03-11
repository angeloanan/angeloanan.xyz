import Tippy, { useSingleton } from '@tippyjs/react/headless'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import useSound from 'use-sound'

import DesktopImage from '../../public/images/uses/desktop.jpg'

// TODO: Refactor this to _data
const UsesData = [
  {
    title: 'Workplace Desktop',
    entries: [
      {
        image: DesktopImage,
        alt: "Angelo's main workplace desktop",
        pins: [
          {
            posTop: '35%',
            posLeft: '62%',
            url: 'https://www.asus.com/us/Displays-Desktops/Monitors/TUF-Gaming/TUF-Gaming-VG27AQ/',
            title: 'ASUS TUF Gaming VG27A',
            description:
              'This is my primary monitor! It is a 1440p HDR10 monitor that supports up to 165Hz refresh rate. I also use this to hook up my Nintendo Switch!'
          },
          {
            posTop: '33%',
            posLeft: '23%',
            url: 'https://www.lg.com/us/monitors/lg-22MK400H-B-led-monitor/',
            title: 'LG 22MK400H',
            description:
              'This is my secondary monitor. It is just a normal 1080p monitor with a sub-par color accuracy!'
          },
          {
            posTop: '74%',
            posLeft: '59%',
            url: 'https://www.lg.com/us/monitors/lg-22MK400H-B-led-monitor/',
            title: 'Keychron K2 Wireless (Blue, Non-hotswap v2)',
            description:
              'My first mechanical keyboard that I own. I have regretted choosing blue switches over linears. I have replaced the default keycaps with a generic blank keycaps.'
          },
          {
            posTop: '83%',
            posLeft: '83.8%',
            url: 'https://www.pcgamingrace.com/products/glorious-model-o-black',
            title: 'Glorious Model O',
            description: 'An ultra-light gaming mouse that is damn well worth it.'
          },
          {
            posTop: '60%',
            posLeft: '10%',
            url: 'https://www.lg.com/us/monitors/lg-22MK400H-B-led-monitor/',
            title: 'Sony WH-1000XM4',
            description:
              'My primary noise-cancelling headphone. Used with a Custom EQ to make my music sound better!'
          }
        ]
      }
    ]
  }
]

interface UsesData {
  title: string
  entries: UsesImagesData[]
}

interface UsesImagesData {
  image: StaticImageData
  alt: string
  pins: UsesImagesPinData[]
}

interface UsesImagesPinData {
  posTop: string
  posLeft: string
  url: string
  title: string
  description: string
}

// TODO: Make refactor to components folder
const PinPopup = ({ attr, pinData }: { attr: unknown; pinData: UsesImagesPinData }) => {
  if (!pinData) {
    return <></>
  }

  return (
    <div className='max-w-xs rounded bg-neutral-100 p-2 shadow-2xl' {...attr}>
      <Link href={pinData.url}>
        <a className='font-header text-xl font-bold tracking-tight text-neutral-800 decoration-fuchsia-500 decoration-wavy hover:text-blue-700 hover:underline'>
          {pinData.title} &rarr;
        </a>
      </Link>
      <p className='mt-2 text-sm font-medium text-neutral-700'>{pinData.description}</p>
    </div>
  )
}

const UsesImage = (props: UsesImagesData) => {
  const [playKnack] = useSound('/sfx/knackSubtle.mp3', { volume: 0.75 })
  const [source, target] = useSingleton({ overrides: ['render'] })

  return (
    <div className='relative'>
      <Image src={props.image} alt={props.alt ?? ''} placeholder='blur' sizes='90vw' />
      <Tippy
        singleton={source}
        hideOnClick={false}
        interactive
        interactiveDebounce={300}
        onTrigger={() => playKnack()}
        render={(attr, content) => {
          // TODO: Change this once answered https://github.com/atomiks/tippyjs-react/discussions/355
          //@ts-expect-error
          return <PinPopup attr={attr} pinData={content} />
        }}
      />

      {/* Iterate over pins */}
      {props.pins.map((pinData) => (
        <div key={pinData.title}>
          {/* ^ A11y, don't remove: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity */}
          <Tippy singleton={target} content={pinData}>
            <button
              style={{ top: pinData.posTop, left: pinData.posLeft }}
              className='absolute flex h-6 w-6 items-center justify-center rounded-full border border-white bg-neutral-700 opacity-60 transition-all after:relative after:h-2 after:w-2 after:rounded-full after:bg-neutral-100 hover:opacity-100 sm:h-8 sm:w-8'
            />
          </Tippy>
        </div>
      ))}
    </div>
  )
}

interface UsesImagesSectionProps {
  title: string
  entries: UsesImagesData[]
}
const UsesImagesSection = (props: UsesImagesSectionProps) => {
  return (
    <section key={props.title} className='mt-16 flex w-full max-w-7xl flex-col items-center px-4'>
      <h1 className='my-8 w-full max-w-4xl font-header text-4xl tracking-tight'>{props.title}</h1>

      {props.entries.map((p) => (
        <UsesImage {...p} key={p.image.src} />
      ))}
    </section>
  )
}

const UsesPage = () => {
  return (
    <>
      <NextSeo title='Tools that I use' />

      <main className='flex w-full flex-col items-center'>
        <h1 className='mx-2 mt-16 text-center font-header text-5xl font-bold tracking-tight text-neutral-800'>
          Stuff that I use
        </h1>
        <p className='mx-2 mt-4 text-center text-lg font-medium leading-8 tracking-tight text-neutral-700'>
          The following are some things that I use in my daily life, both professionally and as a
          hobby.
        </p>

        {UsesData.map((entry) => (
          <UsesImagesSection {...entry} key={entry.title} />
        ))}
      </main>
    </>
  )
}

export default UsesPage
