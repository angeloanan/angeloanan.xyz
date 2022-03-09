import Link from 'next/link'
import * as React from 'react'

interface LinkLiProps {
  href: string
  text: string
}
const LinkLi = ({ href, text }: LinkLiProps) => {
  return (
    <li className='my-2'>
      <Link href={href} passHref>
        <a className='decoration-fuchsia-500 decoration-wavy decoration-2 underline-offset-2 transition-all hover:text-neutral-800 hover:underline'>
          {text}
        </a>
      </Link>
    </li>
  )
}

const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
  hour12: false
})

const CurrentTimeDisplay = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date())
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className='my-2 font-medium tabular-nums tracking-tight text-neutral-600'>
      {IntlDateFormatter.format(currentTime)} GMT+7
    </p>
  )
}

const AboutMeFooter = () => {
  return (
    <section className='my-4 grid grid-cols-2 gap-4'>
      <div>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
          I am
        </h2>

        <p className='my-2 font-medium text-neutral-600'>Christopher Angelo</p>
        {/* <ul className='my-2 list-inside list-["→"] font-medium text-neutral-600 marker:text-neutral-500'>
          <li>Software Engineer</li>
          <li>Community Manager</li>
        </ul> */}
      </div>

      {/* <div className='overflow-clip'>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
          Contact me
        </h2>

        <ul className='font-medium tracking-tight text-neutral-600'>
          <LinkLi href='mailto:angelo@angeloanan.xyz' text='Email' />
          <LinkLi href='https://linkedin.com/in/angeloanan' text='Linkedin' />
        </ul>
      </div> */}

      <div>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
          My current time is
        </h2>

        <CurrentTimeDisplay />
      </div>
    </section>
  )
}

export const MainFooter = () => {
  return (
    <div className='mt-8 flex w-full flex-col items-center px-8'>
      <footer className='w-full max-w-2xl'>
        <hr className='my-4 mx-auto border-neutral-400' />

        <AboutMeFooter />

        <hr className='my-4 mx-auto border-neutral-400' />

        <section className='my-4 grid grid-cols-3'>
          <ul className='font-medium tracking-tight text-neutral-600'>
            <LinkLi href='/' text='Home' />
            <LinkLi href='/about' text='About' />
            <LinkLi href='/works' text='Works' />
          </ul>
          <ul className='font-medium tracking-tight text-neutral-600'>
            <LinkLi href='https://github.com/angeloanan' text='GitHub' />
            <LinkLi href='https://twitter.com/UwUngelo' text='Twitter' />
          </ul>
          <ul className='font-medium tracking-tight text-neutral-600'>
            <LinkLi href='https://discord.com/users/189769721653100546' text='Discord' />
            <LinkLi href='https://t.me/angeloanan' text='Telegram' />
            <LinkLi href='mailto:angelo@angeloanan.xyz' text='Email' />
          </ul>
        </section>

        <div className='my-12 text-center font-light text-neutral-500'>🏳‍🌈 🏳‍⚧ Angelo 2022</div>
      </footer>
    </div>
  )
}
