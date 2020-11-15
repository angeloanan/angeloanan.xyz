import * as React from 'react'

import { Heading } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import AppHeader from '../components/app-header'
import OpenGraph from '../components/opengraph'

const HomePage: React.FC = () => {
  return <>
    <AppHeader/>
    <OpenGraph/>

    <Navbar />
    <Heading>Contacts Page</Heading>
  </>
}

export default HomePage
