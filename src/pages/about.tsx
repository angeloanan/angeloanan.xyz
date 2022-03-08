import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import PFPImage from '../../public/pfp.png'

const InlineLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className='relative inline-block text-fuchsia-600 before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-fuchsia-800 before:hover:bg-fuchsia-200'>
      <span className='relative skew-y-3'>{children}</span>
    </a>
  </Link>
)

const IndexPage = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center'>
        <section className='mt-16 w-full max-w-2xl p-4'>
          <div className='relative mb-8 h-32 w-32'>
            <Image src={PFPImage} layout='fill' alt="Angelo's Profile Picture" />
          </div>
          <h1 className='font-header text-5xl font-bold tracking-tight text-neutral-800'>
            About Me
          </h1>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            Yo, I&apos;m Angelo! I am a software engineer and a community manager based in
            Indonesia. I&apos;m passionate about building things that improves the lives of people.
          </p>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            I am currently working at an undisclosed Web-3 start up based in San Francisco while
            juggling with my undergraduate degree in Global Class Computer Science at{' '}
            <InlineLink href='https://binus.ac.id'>BINUS University</InlineLink>.
          </p>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            You can find me on <InlineLink href='https://github.com/angeloanan'>GitHub</InlineLink>,{' '}
            <InlineLink href='https://twitter.com/UwUngelo'>Twitter</InlineLink> and{' '}
            <InlineLink href='https://discord.com/users/189769721653100546'>Discord</InlineLink>!
          </p>
        </section>

        <section className='mt-4 w-full max-w-2xl p-4'>
          <h2 className='font-header text-4xl font-bold tracking-tight text-neutral-800'>
            Knowledgebase
          </h2>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            I am knowledgeable in wide variety topics, ranging from software engineering, community
            management to content creation.
          </p>
        </section>
      </main>
    </>
  )
}

export default IndexPage
