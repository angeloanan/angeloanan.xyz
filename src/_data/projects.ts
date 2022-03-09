import Bonkmarmu from '../../public/images/projects/bonkmarmu.png'
import FEIDImage from '../../public/images/projects/frontend-id.png'
import LFImage from '../../public/images/projects/lyrics-finder.png'
import PunishmentAppealsImage from '../../public/images/projects/punishment-appeals.png'
import RoleButtonsImage from '../../public/images/projects/role-buttons.png'

// TODO: Implement tags
// TODO: Implement used technologies
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
    title: 'Bonkmarmu',
    summary:
      "A Twitch Extension which tracks and shows a leaderboard of user's channel point redemption, made specifically for OmarmuLIVE",
    description: '',
    url: '',

    duration: 'Feb 2022 — Mar 2022',
    featured: false,
    image: Bonkmarmu
  },
  {
    title: 'Discord Punishment Appeals',
    summary:
      'A work in progress privacy-focused, feature-packed, one-click deploy system for ban and punishment appeals for your Discord community',
    description: '',
    url: 'https://github.com/angeloanan/discord-punishment-appeal',

    duration: 'Jan 2022 — present',
    featured: true,
    image: PunishmentAppealsImage
  },
  {
    title: 'Role Buttons',
    summary:
      'A simple Discord bot that handles user self-assignable roles for your Discord community',
    description: '',
    url: '',

    duration: 'Dec 2021 — present',
    featured: false,
    image: RoleButtonsImage
  },
  {
    title: 'Unplugged Mic Notification',
    summary:
      'A simple Rust app which annoys you when your microphone is accidentally unplugged. Built for a friend who streams on Twitch',
    description: '',
    url: '',

    duration: 'Dec 2021',
    featured: false,
    image: RoleButtonsImage
  },
  {
    title: 'Frontend Indonesia',
    summary:
      'An Indonesian Frontend Web Developer community; The "Melting Pot" of many developer communities within Indonesia',
    description: '',
    url: 'https://feid.dev',

    duration: 'Aug 2020 — present',
    featured: true,
    image: FEIDImage
  },
  {
    title: 'Lyrics Finder',
    summary:
      'A verified Discord bot which searches and retrieves lyrics for a given song. The bot itself currently sits in over 15,000 communities servicing more than 600K+ users!',
    description: '',
    url: 'https://lyrics-finder.angeloanan.xyz',

    duration: 'Jan 2019 — present',
    featured: true,
    image: LFImage
  }
]
