import * as React from 'react'

import AppHeader from '../components/app-header'
import Masthead from '../components/home/masthead'
import Navbar from '../components/navbar'

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader/>

      <Navbar />
      <Masthead/>
    </>
  )
}

export default HomePage
