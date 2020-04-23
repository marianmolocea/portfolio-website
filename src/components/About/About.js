import React, { useState, useEffect } from 'react'
import Title from '../Title/Title'
import './About.css'
import ian from '../../images/Ian.jpg'


export default function About() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => window.addEventListener('resize', () => setWindowWidth(window.innerWidth)), [])

  return (
    <>
    {
      windowWidth >= 769 ? 
        <>
          <div className='left-side'>
            <Title title="About Me" line='line'/>
            <p className="description">I'm a technology enthusiast with a positive mindset and with a wild desire to learn new things. Since beginning my journey as a webdeveloper, I've continuously worked to improve my skills to solve all the problems I encountered in my projects. Although I can work well bymyself, I'm more than happy to work as part of a team and, I'm keen to help my teammates whenever they need me. I'm looking forward tonew projects and new challenges from which I can learn new things.</p>
          </div>
          <div className='right-side'>
            <img className="profile-image animated forward fadeInRight" src={ian} alt="Marian Molocea" />
          </div>
        </>
      :
      <>
        <div className='right-side'>
          <img className="profile-image animated forward fadeInRight" src={ian} alt="Marian Molocea" />
        </div>
        <div className='left-side'>
          <Title title="About Me" line='line'/>
          <p className="description">I'm a technology enthusiast with a positive mindset and with a wild desire to learn new things. Since beginning my journey as a webdeveloper, I've continuously worked to improve my skills to solve all the problems I encountered in my projects. Although I can work well bymyself, I'm more than happy to work as part of a team and, I'm keen to help my teammates whenever they need me. I'm looking forward tonew projects and new challenges from which I can learn new things.</p>
        </div>
      </>
    }
      
    </>
  )
}
