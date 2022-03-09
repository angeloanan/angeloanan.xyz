import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import PFPImage from '../../public/pfp.png'

const LanguageDisclosure = dynamic(
  () => import('../components/DynamicDisclosures/LanguageDisclosure')
)
const WebDevelopmentDisclosure = dynamic(
  () => import('../components/DynamicDisclosures/WebDevelopmentDisclosure')
)
const InfrastructureDisclosure = dynamic(
  () => import('../components/DynamicDisclosures/InfrastructureDisclosure')
)
const ContentCreationDisclosure = dynamic(
  () => import('../components/DynamicDisclosures/ContentCreationDisclosure')
)
const DevelopmentToolsDisclosure = dynamic(
  () => import('../components/DynamicDisclosures/DevelopmentToolsDisclosure')
)

const InlineLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className='relative inline-block text-fuchsia-600 before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-fuchsia-800 before:hover:bg-fuchsia-200'>
      <span className='relative skew-y-3'>{children}</span>
    </a>
  </Link>
)

const AboutPage = () => {
  return (
    <>
      <NextSeo title='About Me' />

      <main className='flex w-full flex-col items-center'>
        <section className='mt-16 w-full max-w-2xl p-4'>
          <div className='relative mb-8 h-32 w-32'>
            <Image src={PFPImage} layout='fill' alt="Angelo's Profile Picture" placeholder='blur' />
          </div>
          <h1 className='font-header text-5xl font-bold tracking-tight text-neutral-800'>
            About Me
          </h1>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            Yo, I&apos;m Angelo &mdash; A software engineer and a community manager based in
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
            Background
          </h2>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            My journey in programming began at 13 years old when I learned HTML and CSS through{' '}
            <InlineLink href='https://khanacademy.org'>Khan Academy</InlineLink>. I then ventured
            out to learn backend systems and built{' '}
            <InlineLink href='https://lyrics-finder.angeloanan.xyz'>Lyrics Finder</InlineLink>, a
            Discord bot that scrapes lyrics from the Internet. To my surprise it gained popularity
            despite the longstanding presence of competing bots due to the lack of a reliable
            lyrics-searching function available to them.
          </p>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            I joined <InlineLink href='https://kawalcovid19.id'>KawalCOVID-19</InlineLink>, a
            volunteer effort to provide accurate and reliable information about the COVID-19
            pandemic in Indonesia, and assisted their content team in communicating with developers.
          </p>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            Furthermore, I am also a co-founder of{' '}
            <InlineLink href='https://feid.dev'>Frontend Indonesia</InlineLink>, an Indonesian
            community of frontend developers that aims to unify the separated and clustered
            communities.
          </p>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            With knowledge being under my belt, I went on to learn new languages, contribute to open
            source projects, participate in community moderation and eventually, create my own
            things.
          </p>
        </section>

        <section className='mt-4 w-full max-w-2xl p-4'>
          <h2 className='font-header text-4xl font-bold tracking-tight text-neutral-800'>
            Knowledgebase
          </h2>

          <p className='mt-4 text-lg font-medium leading-8 tracking-tight text-neutral-700'>
            I am knowledgeable in wide variety topics, ranging from software engineering, community
            management to content creation:
          </p>

          <LanguageDisclosure />
          <WebDevelopmentDisclosure />
          <InfrastructureDisclosure />
          <ContentCreationDisclosure />
          <DevelopmentToolsDisclosure />
        </section>
      </main>
    </>
  )
}

export default AboutPage
