import FEIDImage from '../../public/images/projects/frontend-id.png'
import LFImage from '../../public/images/projects/lyrics-finder.png'
import PunismentAppealsImage from '../../public/images/projects/punishment-appeals.png'

export interface ProjectsDataProps {
  title: string
  summary: string

  description: string
  url: string

  duration: string
  image: StaticImageData
}

export const FeaturedProjects: ProjectsDataProps[] = [
  {
    title: 'Discord Punishment Appeals',
    summary:
      'A work in progress privacy-focused, fully-featured, one-click deploy infraction / punishment appeals website for your Discord community',
    description: 'A verified Discord bot which searches for lyrics to music through Genius!',
    url: 'https://github.com/angeloanan/discord-punishment-appeal',

    duration: 'Jan 2022 — present',
    image: PunismentAppealsImage
  },
  {
    title: 'Frontend Indonesia',
    summary:
      'An Indonesian Frontend Web Developer community; The "melting pot" of many Indonesian Frontend Developer community',
    description: 'A verified Discord bot which searches for lyrics to music through Genius!',
    url: 'https://feid.dev',

    duration: 'Aug 2020 — present',
    image: FEIDImage
  },
  {
    title: 'Lyrics Finder',
    summary:
      'A verified Discord bot which searches for lyrics to a song. The bot is in more than 15K community reaching more than 600,000 users!',
    description: 'A verified Discord bot which searches for lyrics to music through Genius!',
    url: 'https://lyrics-finder.angeloanan.xyz',

    duration: 'Jan 2019 — present',
    image: LFImage
  }
]
