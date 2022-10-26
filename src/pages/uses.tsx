import Tippy, { useSingleton } from '@tippyjs/react/headless'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import useSound from 'use-sound'

import DesktopImage from '../../public/images/uses/desktop.jpg'
import EntertainmentImage from '../../public/images/uses/entertainment.jpg'

// TODO: Refactor this to _data
const UsesData = [
  {
    title: 'Home Desktop & Entertainment',
    entries: [
      {
        image: DesktopImage,
        alt: "Angelo's main desktop setup",
        pins: [
          {
            posTop: '28%',
            posLeft: '65%',
            url: 'https://www.asus.com/us/Displays-Desktops/Monitors/TUF-Gaming/TUF-Gaming-VG27AQ/',
            title: 'ASUS TUF Gaming VG27A',
            description:
              'This is my primary monitor! It is a 1440p HDR10 monitor that supports up to 165Hz refresh rate. I also use this to hook up my Nintendo Switch!'
          },
          {
            posTop: '27%',
            posLeft: '23%',
            url: 'https://www.lg.com/us/monitors/lg-22MK400H-B-led-monitor/',
            title: 'LG 22MK400H',
            description:
              'This is my secondary monitor. It is just a normal 1080p monitor with a sub-par color accuracy!'
          },
          {
            posTop: '67%',
            posLeft: '51%',
            url: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
            title: 'Keychron K2 Wireless (Blue, Non-hotswap v2)',
            description:
              'My first mechanical keyboard that I own. I have regretted choosing blue switches over linears. I have replaced the default keycaps with a generic blank keycaps.'
          },
          {
            posTop: '73%',
            posLeft: '75%',
            url: 'https://www.pcgamingrace.com/products/glorious-model-o-black',
            title: 'Glorious Model O',
            description: 'An ultra-light gaming mouse that is damn well worth it.'
          },
          {
            posTop: '58%',
            posLeft: '18%',
            url: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b/',
            title: 'Sony WH-1000XM4',
            description:
              'My primary noise-cancelling headphone. Used with a Custom EQ to make my music sound better!'
          },
          {
            posTop: '84%',
            posLeft: '67%',
            url: 'https://www.samsontech.com/samson/products/microphones/usb-microphones/gtrackpro/',
            title: 'Samson G-Track Pro',
            description:
              'An USB Microphone that I use for voice chats and some small-scale recording / music production.'
          },
          {
            posTop: '49.5%',
            posLeft: '49.5%',
            url: 'https://store.google.com/us/product/google_nest_mini/',
            title: 'Google Nest (Home) Mini',
            description:
              'A friend of mine gifted this Smart Speaker to me. I use it to control my room with smart bulbs and a custom Google Home app for other stuff.'
          },
          {
            posTop: '55%',
            posLeft: '28%',
            url: 'https://vercel.com',
            title: 'NextJS Mug',
            description:
              'NextJS mug NextJS mug NextJS mug NextJS mug NextJS mug NextJS mug NextJS mug NextJS mug NextJS mug'
          }
        ]
      },

      {
        image: EntertainmentImage,
        alt: "Angelo's entertainment setup",
        pins: [
          {
            posTop: '62%',
            posLeft: '87%',
            url: 'https://www.nintendo.com/store/products/nintendo-switch-animal-crossing-new-horizons-edition/',
            title: 'Nintendo Switch - AC:NH',
            description:
              "Actual first console that I own. You are more welcome to add me as friends! My friend code is SW-2297-0506-9408 (Please DM me when you've added me)"
          },
          {
            posTop: '74%',
            posLeft: '84%',
            url: 'https://www.nintendo.com/store/products/pro-controller/',
            title: 'Nintendo Switch Pro Controller',
            description:
              'To be honest, this generally is my favorite controller to use when gaming really casually.'
          },
          {
            posTop: '75%',
            posLeft: '64%',
            url: 'https://wii.com/',
            title: 'Nintendo Wii Controller + Nunchuck',
            description: "Wii games are revolutionary. 'Nuff said."
          },
          {
            posTop: '64%',
            posLeft: '27%',
            url: 'https://www.oculus.com/quest-2/',
            title: 'Oculus Quest 2',
            description:
              'I play and do some content creation in VR with this headset. This is a great VR headset for their price. Though, with limited upgradability and expandability, I am looking forward to upgrading to a Valve Index'
          },
          {
            posTop: '53%',
            posLeft: '33.5%',
            url: 'https://www.thecubicle.com/products/yj-mgc-4x4',
            title: 'YJ MGC (3x3, 4x4 and 5x5)',
            description:
              'These are my rubiks cubes. I like to speed cube as a hobby. Though, these cubes serves a second purpose: fidget toys for my brain.'
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
const PinPopup = ({
  attr,
  pinData
}: {
  attr: Record<string, unknown>
  pinData: UsesImagesPinData
}) => {
  if (!pinData) {
    return <></>
  }

  return (
    <div className='max-w-xs rounded bg-neutral-100 p-2 shadow-2xl' {...attr}>
      <Link
        href={pinData.url}
        className='font-header text-xl font-bold tracking-tight text-neutral-800 decoration-fuchsia-500 decoration-wavy hover:text-blue-700 hover:underline'
      >
        {pinData.title} &rarr;
      </Link>
      <p className='mt-2 text-sm font-medium text-neutral-700'>{pinData.description}</p>
    </div>
  )
}

const UsesImage = (props: UsesImagesData) => {
  const [playKnack] = useSound('/sfx/knackSubtle.mp3', { volume: 0.75 })
  const [source, target] = useSingleton({ overrides: ['render'] })

  return (
    <div className='relative w-full'>
      <Image
        src={props.image}
        alt={props.alt ?? ''}
        placeholder='blur'
        sizes='640w, 800w, 1024w, 1280w'
      />
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
          {/* @ts-expect-error L199 - https://github.com/atomiks/tippyjs-react/discussions/355 */}
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
