import React from 'react'
import Title from '../Title/Title'
import './About.css'
import ian from '../../images/Ian.jpg'


export default function About() {
  return (
    <div className="About">
      <div className="left-side">
        <Title title="About Me" />
        <p>I put all the hard work in learning how to create clean and organized pieces of code. Even if I am at the beginning of this new career path, I think my keen for performance helped me to learn and apply a lot in some of the projects I worked on. Although I am a freshman in this domain, due to my fast learning ability I will grow my knowledge in no time and I will be able to bring value into the company which will give me the chance to prove myself.</p>
      </div>
      <div className="right-side">
        <img src={ian} alt="Marian Molocea" />
      </div>
    </div>
  )
}
