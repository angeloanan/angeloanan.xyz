import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import useSound from 'use-sound'

import type { ProjectsDataProps } from '../_data/projects'
import { ProjectsData } from '../_data/projects'

const MoreAboutMeButton = () => {
  const [playClick] = useSound('sfx/click.mp3', { volume: 0.5 })
  const [playClack] = useSound('sfx/confirmClack.mp3', { volume: 0.5 })

  return (
    <Link
      href='/about'
      passHref
      className='group mt-8 rounded-full bg-fuchsia-200 py-4 px-8 font-header text-lg text-fuchsia-700 transition-colors hover:bg-fuchsia-300'
      aria-label='Navigate to About me page'
      onMouseDown={() => playClick()}
      onMouseUp={() => playClack()}
    >
      More about me <span className='pl-1 transition-all group-hover:pl-2'>&rarr;</span>
    </Link>
  )
}

const Masthead = () => (
  <section className='mt-16 w-full max-w-2xl p-4' aria-label='Introduction'>
    <h1 className='angelo-3d font-header text-5xl font-extrabold tracking-tighter text-neutral-800'>
      Yo, my name is Angelo.
    </h1>
    <p className='pt-4 font-semibold leading-8 tracking-normal text-neutral-600'>
      I&apos;m a software engineer currently working at an undisclosed startup. This is my personal
      website showcasing variety of my latest ventures on stuff I&apos;m doing!
    </p>

    <div className='flex'>
      <MoreAboutMeButton />
    </div>
  </section>
)

type FeaturedProjectEntryProps = ProjectsDataProps & {
  align: 'left' | 'right'
}
const FeaturedProjectEntry = ({
  title,
  duration,
  summary,
  image,
  align = 'right',
  url
}: FeaturedProjectEntryProps) => {
  const [playHover] = useSound('sfx/hover.mp3', { volume: 0.65, interrupt: true })

  const [isHovering, setIsHovering] = React.useState(false)
  React.useEffect(() => {
    if (isHovering) {
      playHover()
    }
  }, [isHovering, playHover])

  return (
    <div
      className={`group my-12 rounded-lg border-2 border-neutral-100 bg-gradient-to-br from-neutral-50 shadow transition-all hover:-translate-y-2 hover:shadow-xl ${
        align === 'right' ? 'md:ml-32 md:-mr-16' : 'md:mr-32 md:-ml-16'
      }`}
    >
      <Link
        href={url}
        passHref
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left side thing */}
        <div className='flex items-center sm:items-start'>
          <div className='relative m-4 h-16 w-16 shrink-0 transition-all delay-100 group-hover:-translate-y-1 md:h-24 md:w-24'>
            <Image
              src={image}
              alt={`${title} Logo`}
              className='rounded-lg transition-all delay-75 group-hover:drop-shadow-lg'
              fill
              sizes='14vw'
              placeholder='blur'
            />
          </div>

          <div className='my-4 mr-4 w-full'>
            <div className='flex w-full flex-col md:flex-row md:justify-between'>
              <span className='font-header text-xl font-semibold tracking-tight'>{title}</span>
              <span className='font-light tracking-tight'>{duration}</span>
            </div>

            <p className='mt-2 tracking-tight text-neutral-700 '>{summary}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const IndexPage = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center'>
        <Masthead />

        <section className='my-16 mb-4 w-full max-w-2xl p-4'>
          <h2 className='font-header text-4xl font-extrabold tracking-tighter text-neutral-800'>
            Featured Projects
          </h2>

          {ProjectsData.filter((p) => p.featured).map((project, index) => {
            const align = index % 2 === 0 ? 'left' : 'right'

            return <FeaturedProjectEntry key={index} {...project} align={align} />
          })}
        </section>
      </main>
    </>
  )
}

export default IndexPage
