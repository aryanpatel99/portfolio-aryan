import React from 'react'
import Navbar from './Navbar'
import HeroContainer from './HeroContainer'
import MainHeroContainer from './mainHeroContainer'

const Container = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 sticky top-0 z-50 backdrop-blur-lg'>
      <MainHeroContainer/>
    </div>
  )
}

export default Container