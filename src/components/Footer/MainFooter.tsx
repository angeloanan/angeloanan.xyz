import Link from 'next/link'

interface LinkLiProps {
  href: string
  text: string
}
const LinkLi = ({ href, text }: LinkLiProps) => {
  return (
    <li className='my-2 decoration-fuchsia-500 decoration-wavy decoration-2 underline-offset-2 transition-all hover:text-neutral-800 hover:underline'>
      <Link href={href} passHref>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export const MainFooter = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <footer className='w-full max-w-2xl'>
        <hr className='my-4 mx-auto border-neutral-400' />

        <div className='my-4 grid grid-cols-3'>
          <ul className='text font-medium tracking-tight text-neutral-600'>
            <LinkLi href='/home' text='Home' />
            <LinkLi href='/about' text='About' />
            <LinkLi href='/works' text='Works' />
          </ul>
          <ul className='text font-medium tracking-tight text-neutral-600'>
            <LinkLi href='https://github.com/angeloanan' text='GitHub' />
            <LinkLi href='https://twitter.com/UwUngelo' text='Twitter' />
          </ul>
          <ul className='text font-medium tracking-tight text-neutral-600'>
            <LinkLi href='https://discord.com/users/189769721653100546' text='Discord' />
            <LinkLi href='https://t.me/angeloanan' text='Telegram' />
            <LinkLi href='mailto:angelo@angeloanan.xyz' text='Email' />
          </ul>
        </div>

        <div className='my-12 text-center font-light text-neutral-500'>🏳‍🌈 🏳‍⚧ Angelo 2022</div>
      </footer>
    </div>
  )
}
