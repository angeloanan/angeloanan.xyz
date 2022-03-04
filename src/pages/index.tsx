import Link from 'next/link'
import * as React from 'react'

const Masthead = () => (
  <div className='mt-16 w-full max-w-2xl p-4'>
    <h1 className='angelo-3d font-header text-5xl font-extrabold tracking-tighter text-neutral-800'>
      Yo, my name is Angelo.
    </h1>
    <p className='pt-4 font-semibold leading-8 tracking-normal text-neutral-600'>
      I&apos;m a full-stack developer, currently working at an undisclosed startup. This is my
      personal website &mdash; where you&apos;ll find the highlights on stuff I&apos;m doing.
    </p>

    <div className='flex'>
      <Link href='/about'>
        <a className='group mt-8 rounded-full bg-fuchsia-200 py-4 px-8 font-header text-lg text-fuchsia-700 transition-colors hover:bg-fuchsia-300'>
          More about me <span className='pl-1 transition-all group-hover:pl-2'>&rarr;</span>
        </a>
      </Link>
    </div>
  </div>
)

const IndexPage = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center'>
        <Masthead />

        <div className='mt-16 w-full max-w-2xl p-4'>
          <h2 className='font-header text-4xl font-extrabold tracking-tighter text-neutral-800'>
            Featured Projects
          </h2>
        </div>

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
