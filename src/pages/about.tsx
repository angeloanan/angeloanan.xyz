import { Heading } from '@chakra-ui/react'
import * as React from 'react'
import AppHeader from '../components/app-header'
import Navbar from '../components/navbar'

const AboutPage: React.FC = () => {
  return (
    <>
      <AppHeader />

      <Navbar />
      <Heading>Hello</Heading>
    </>
  )
}

export default AboutPage
