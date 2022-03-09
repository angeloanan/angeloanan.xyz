import FEIDImage from '../../public/images/projects/frontend-id.png'
import LFImage from '../../public/images/projects/lyrics-finder.png'
import PunismentAppealsImage from '../../public/images/projects/punishment-appeals.png'

export interface ProjectsDataProps {
  title: string
  summary: string

  description: string
  url: string

  duration: string
  featured: boolean
  image: StaticImageData
}

export const ProjectsData: ProjectsDataProps[] = [
  {
    title: 'Discord Punishment Appeals',
    summary:
      'A work in progress privacy-focused, feature-packed, one-click deploy system for ban and punishment appeals for your Discord community',
    description: 'A verified Discord bot which searches for lyrics to music through Genius!',
    url: 'https://github.com/angeloanan/discord-punishment-appeal',

    duration: 'Jan 2022 — present',
    featured: true,
    image: PunismentAppealsImage
  },
  {
    title: 'Frontend Indonesia',
    summary:
      'An Indonesian Frontend Web Developer community; The "Melting Pot" of many developer communities within Indonesia',
    description: 'A verified Discord bot which searches for lyrics to music through Genius!',
    url: 'https://feid.dev',

    duration: 'Aug 2020 — present',
    featured: true,
    image: FEIDImage
  },
  {
    title: 'Lyrics Finder',
    summary:
      'A verified Discord bot which searches and retrieves lyrics for a given song. The bot itself currently sits in over 15,000 communities servicing more than 600K+ users!',
    description: 'A verified Discord bot which searches for lyrics to music through Genius!',
    url: 'https://lyrics-finder.angeloanan.xyz',

    duration: 'Jan 2019 — present',
    featured: true,
    image: LFImage
  }
]
