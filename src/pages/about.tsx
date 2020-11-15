import { Heading } from '@chakra-ui/react'
import * as React from 'react'
import AppHeader from '../components/app-header'
import Navbar from '../components/navbar'
import OpenGraph from '../components/opengraph'

const AboutPage: React.FC = () => {
  return (
    <>
      <AppHeader/>
      <OpenGraph/>

      <Navbar />
      <Heading>Hello</Heading>
    </>
  )
}

export default AboutPage
