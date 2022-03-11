import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import useSound from 'use-sound'

const NavLinks = [
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/works',
    text: 'Works'
  },
  {
    href: '/uses',
    text: 'Tools'
  }
]

const HomeNav = () => {
  const [playClick] = useSound('sfx/click.mp3', { volume: 0.65 })
  const [playClack] = useSound('sfx/homeClack.mp3', { volume: 0.65 })

  return (
    <Link href='/' passHref>
      <a
        className='py-4 font-header text-lg font-extrabold'
        role='navigation'
        aria-label='Angelo Site - Navigate to homepage'
        onTouchStart={() => playClick()}
        onTouchEnd={() => playClick()}
        onMouseDown={() => playClick()}
        onMouseUp={() => playClack()}
      >
        <span className='uppercase tracking-tight text-neutral-800'>Angelo</span>
        <span className='px-0.5'>·</span>
        <span className='uppercase tracking-tight text-fuchsia-500'>Site</span>
      </a>
    </Link>
  )
}

interface LinksNavProps {
  href: string
}
const LinksNav: React.FC<LinksNavProps> = ({ href, children }) => {
  const router = useRouter()
  const [playClick] = useSound('sfx/click.mp3', { volume: 0.65 })
  const [playClack] = useSound('sfx/naviClack.mp3', { volume: 0.65 })
  const isCurrentPath = router.pathname === href

  return (
    <Link href={href} key={href} passHref>
      <a
        className={`flex h-full items-center px-4 text-lg tracking-tight hover:bg-fuchsia-200 hover:text-fuchsia-700 ${
          isCurrentPath ? ' font-semibold text-fuchsia-800' : 'font-regular'
        }`}
        onMouseDown={() => playClick()}
        onMouseUp={() => playClack()}
      >
        {children}
      </a>
    </Link>
  )
}

const MainNav = () => {
  return (
    <header className='sticky top-0 z-20 flex w-full justify-between px-4 backdrop-blur-md sm:px-12'>
      <HomeNav />

      <div className='flex select-none'>
        {NavLinks.map(({ href, text }) => {
          return (
            <LinksNav key={href} href={href}>
              {text}
            </LinksNav>
          )
        })}
      </div>
    </header>
  )
}

export { MainNav }
