import type { NextPage } from 'next'
import Image from 'next/image'
import * as React from 'react'

import BlahajImage from '../../public/images/404.png'

const NotFoundPage: NextPage = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <div className='mt-16 w-48 sm:w-72'>
        <Image src={BlahajImage} alt='' className='rounded-3xl shadow-md' />
      </div>

      <h1 className='mt-8 flex flex-col text-center font-header font-extrabold text-fuchsia-500'>
        <span className='text-9xl'>404</span>
        <span className='text-5xl'>Page not found</span>
      </h1>

      <p className='mt-4 text-center text-lg font-semibold tracking-tight text-neutral-600'>
        The page you were looking for doesn&apos;t exist or were moved.
      </p>
      <p className='mt-2 text-lg font-light tracking-tight text-neutral-500'>Blåhaj is angry : (</p>
    </main>
  )
}

export default NotFoundPage
