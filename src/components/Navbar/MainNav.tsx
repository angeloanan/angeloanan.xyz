import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

const NavLinks = [
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/work',
    text: 'Works'
  }
]

const MainNav = () => {
  const router = useRouter()

  return (
    <header className='sticky top-0 z-20 flex w-full justify-between px-4 backdrop-blur-md sm:px-12'>
      <Link href='/' passHref>
        <a
          className='py-4 font-header text-lg font-extrabold'
          role='navigation'
          aria-label='Angelo Site - Navigate to homepage'
        >
          <span className='uppercase tracking-tight text-neutral-800'>Angelo</span>
          <span className='px-0.5'>·</span>
          <span className='uppercase tracking-tight text-fuchsia-500'>Site</span>
        </a>
      </Link>

      <div className='flex select-none'>
        {NavLinks.map(({ href, text }) => {
          const isCurrentPath = router.pathname === href

          return (
            <Link href={href} key={href} passHref>
              <a
                className={`flex h-full items-center px-4 text-lg tracking-tight hover:bg-fuchsia-200 hover:text-fuchsia-700 ${
                  isCurrentPath ? ' font-semibold text-fuchsia-800' : 'font-regular'
                }`}
              >
                {text}
              </a>
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export { MainNav }
