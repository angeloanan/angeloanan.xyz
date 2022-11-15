import Link from 'next/link'
import * as React from 'react'

const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
  hour12: false
})

const timeslotFormatter = (date?: Date) => {
  if (date == null) return { color: '', string: '' }
  const h = parseInt(IntlDateFormatter.format(date).split(':')[0])

  if (h < 3) {
    return { color: 'bg-red-600', string: 'Busy - Work' }
  } else if (h < 8) {
    return { color: 'bg-amber-600', string: 'Sleep' }
  } else if (h < 14) {
    return { color: 'bg-red-600', string: 'Busy - University' }
  } else if (h < 20) {
    return { color: 'bg-green-500', string: 'Free time' }
  } else {
    return { color: 'bg-red-600', string: 'Busy - Work' }
  }
}

interface LinkLiProps {
  href: string
  text: string
  rel?: 'me'
}
const LinkLi = ({ href, text, rel }: LinkLiProps) => {
  return (
    <li className='my-2'>
      <Link
        href={href}
        rel={rel}
        passHref
        className='decoration-fuchsia-500 decoration-wavy decoration-2 underline-offset-2 transition-all hover:text-neutral-800 hover:underline'
      >
        {text}
      </Link>
    </li>
  )
}

const CurrentTimeDisplay = () => {
  const [currentTime, setCurrentTime] = React.useState<Date>()
  const [timeslot, setTimeslot] = React.useState<{ color: string; string: string }>()

  const calculateTime = React.useCallback(() => {
    const now = new Date()
    setCurrentTime(now)
    setTimeslot(timeslotFormatter(now))
  }, [])

  // Timer
  React.useEffect(() => {
    calculateTime()

    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [calculateTime])

  return (
    <>
      <p className='mt-2 font-medium tabular-nums tracking-tight text-neutral-600'>
        {IntlDateFormatter.format(currentTime)} GMT+7
      </p>
      <div className='flex items-center font-medium tracking-tight text-neutral-500'>
        <div className={`mr-2 h-2 w-2 shrink-0 rounded-full ${timeslot?.color}`}>
          <div className={`${timeslot?.color} mr-2 h-2 w-2 shrink-0 animate-ping rounded-full`} />
        </div>
        {timeslot?.string}
      </div>
    </>
  )
}

const AboutMeFooter = () => {
  return (
    <section className='my-4 grid grid-cols-2 sm:grid-cols-3'>
      <div>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
          I am
        </h2>

        <p className='my-2 font-medium text-neutral-600'>Christopher Angelo</p>
      </div>

      <div>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
          My current time
        </h2>

        <CurrentTimeDisplay />
      </div>

      <div className='overflow-clip'>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
          Contact me
        </h2>

        <ul className='font-medium tracking-tight text-neutral-600'>
          <LinkLi href='mailto:angelo@angeloanan.xyz' text='Email' />
          <LinkLi href='https://linkedin.com/in/angeloanan' text='Linkedin' />
        </ul>
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
            <LinkLi href='https://flushed.party/@xy' text='Fediverse' rel='me' />
          </ul>
        </section>

        <div className='my-12 text-center font-light text-neutral-500'>🏳‍🌈 🏳‍⚧ Angelo 2022</div>
      </footer>
    </div>
  )
}
