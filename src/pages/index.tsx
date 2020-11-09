import * as React from 'react'

import AppHeader from '../components/app-header'
import Masthead from '../components/home/masthead'
import Navbar from '../components/navbar'
import OpenGraph from '../components/opengraph'

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader/>
      <OpenGraph/>

      <Navbar />
      <Masthead/>
    </>
  )
}

export default HomePage
