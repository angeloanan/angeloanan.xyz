import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import type { ProjectsDataProps } from '../_data/projects'
import { FeaturedProjects } from '../_data/projects'

const Masthead = () => (
  <section className='mt-16 w-full max-w-2xl p-4' aria-label='Introduction'>
    <h1 className='angelo-3d font-header text-5xl font-extrabold tracking-tighter text-neutral-800'>
      Yo, my name is Angelo.
    </h1>
    <p className='pt-4 font-semibold leading-8 tracking-normal text-neutral-600'>
      I&apos;m a full-stack developer, currently working at an undisclosed startup. This is my
      personal website &mdash; where you&apos;ll find the highlights on stuff I&apos;m doing.
    </p>

    <div className='flex'>
      <Link href='/about'>
        <a
          className='group mt-8 rounded-full bg-fuchsia-200 py-4 px-8 font-header text-lg text-fuchsia-700 transition-colors hover:bg-fuchsia-300'
          aria-label='Navigate to About me page'
        >
          More about me <span className='pl-1 transition-all group-hover:pl-2'>&rarr;</span>
        </a>
      </Link>
    </div>
  </section>
)

type ProjectEntryProps = ProjectsDataProps & {
  align: 'left' | 'right'
}

const ProjectEntry = ({
  title,
  duration,
  summary,
  image,
  align = 'right',
  url
}: ProjectEntryProps) => (
  <Link href={url} passHref>
    <a className=''>
      <div className='group my-12'>
        <div
          className={`rounded-lg border-2 border-neutral-100 bg-gradient-to-br from-neutral-50 shadow transition-all hover:-translate-y-2 hover:shadow-xl ${
            align === 'right' ? 'md:ml-32 md:-mr-16' : 'md:mr-32 md:-ml-16'
          }`}
        >
          {/* Header thing */}
          <div className='flex items-center sm:items-start'>
            <div className='relative m-4 h-16 w-16 shrink-0 transition-all delay-100 group-hover:-translate-y-1 group-hover:shadow-lg md:h-24 md:w-24'>
              <Image src={image} alt={`${title} Logo`} layout='fill' className='rounded-lg' />
            </div>

            <div className='my-4 mr-4 w-full'>
              <div className='flex w-full flex-col md:flex-row md:justify-between'>
                <span className='font-header text-xl font-semibold tracking-tight'>{title}</span>
                <span className='font-light tracking-tight'>{duration}</span>
              </div>

              <p className='mt-2 tracking-tight text-neutral-700 '>{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </Link>
)

const IndexPage = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center'>
        <Masthead />

        <section className='mt-16 w-full max-w-2xl p-4'>
          <h2 className='font-header text-4xl font-extrabold tracking-tighter text-neutral-800'>
            Featured Projects
          </h2>

          {FeaturedProjects.map((project, index) => {
            const align = index % 2 === 0 ? 'left' : 'right'

            return <ProjectEntry key={index} {...project} align={align} />
          })}
        </section>

        {/* Body */}
        {/* <div className='w-full max-w-screen-xl p-4'>
        <div>
          <Image src={PFPImage} alt='A portrait image of Angelo' placeholder='blur' />
        </div>
      </div> */}
      </main>
    </>
  )
}

export default IndexPage
