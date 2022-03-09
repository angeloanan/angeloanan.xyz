import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { ProjectsData, ProjectsDataProps } from '../../_data/projects'

type ProjectEntryProps = ProjectsDataProps & {
  align: 'left' | 'right'
}
const ProjectEntry = ({ align = 'right', title, duration, summary }: ProjectEntryProps) => {
  return (
    <div
      className={`min-h-[24rem] w-full rounded-2xl bg-gradient-to-br from-neutral-50 shadow transition-all hover:-translate-y-2 hover:shadow-xl ${
        align === 'right' ? 'md:ml-16 md:-mr-0' : 'md:mr-32 md:-ml-16'
      }`}
    >
      <div className='p-8'>
        <div className='font-light uppercase tabular-nums tracking-wider'>{duration}</div>
        <div className='font-header text-4xl font-bold tracking-tight'>{title} &mdash;</div>
        <div className='mt-6 pr-12 font-header text-2xl tracking-tight text-neutral-700'>
          {summary}
        </div>
      </div>
    </div>
  )
}

const WorksPage = () => {
  return (
    <>
      <NextSeo title='My projects' />

      <main className='flex w-full flex-col items-center'>
        {/* TODO: Split into formal & nonformal / main & sideprojects & hobby */}

        <section className='mt-16 w-full max-w-2xl p-4'>
          <h1 className='font-header text-5xl font-bold tracking-tight text-neutral-800'>
            Things that I have worked on
          </h1>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            Below are the list of things that I have contributed on, both formally and in my free
            time:
          </p>

          <div role='list' className='my-8 flex flex-col gap-12 px-4'>
            {ProjectsData.map((project, index) => {
              const align = index % 2 === 0 ? 'left' : 'right'

              return <ProjectEntry key={index} {...project} align={align} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default WorksPage
