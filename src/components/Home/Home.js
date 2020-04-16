import React from 'react'
import HeroText from '../HeroText/HeroText'
import ParticlesEffect from '../Particles/Particles';
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      <ParticlesEffect />
      <HeroText />
    </div>
  )
}
