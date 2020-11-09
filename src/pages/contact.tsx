import * as React from 'react'

import { Heading } from '@chakra-ui/core'
import Navbar from '../components/navbar'

const HomePage: React.FC = () => {
  return <>
    <Navbar />
    <Heading>Contacts Page</Heading>
  </>
}

export default HomePage
