import Link from 'next/link'
import * as React from 'react'

const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
  hour12: false
})

const calculateTimeslot = (date: Date) => {
  const h = date.getHours()

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

const CurrentTimeDisplay = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date())
  const [timeslot, setTimeslot] = React.useState(calculateTimeslot(currentTime))

  // Timer
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Early return on same minute
      if (currentTime.getMinutes() === new Date().getMinutes()) {
        return
      }

      setCurrentTime(new Date())
      setTimeslot(calculateTimeslot(currentTime))
    }, 1000)

    return () => clearInterval(interval)
  }, [currentTime])

  return (
    <>
      <p className='mt-2 font-medium tabular-nums tracking-tight text-neutral-600'>
        {IntlDateFormatter.format(currentTime)} GMT+7
      </p>
      <div className='flex items-center font-medium tracking-tight text-neutral-500'>
        <div className={`h-2 w-2 ${timeslot.color} ping mr-2 shrink-0 rounded-full`} />
        {timeslot.string}
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
          </ul>
        </section>

        <div className='my-12 text-center font-light text-neutral-500'>🏳‍🌈 🏳‍⚧ Angelo 2022</div>
      </footer>
    </div>
  )
}
