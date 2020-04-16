import React, { useState, useEffect } from 'react'
import Title from '../Title/Title'
import './About.css'
import ian from '../../images/Ian.jpg'


export default function About() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => window.addEventListener('resize', () => setWindowWidth(window.innerWidth)), [window.innerWidth])

  return (
    <>
    {
      windowWidth >= 769 ? 
        <>
          <div className='left-side'>
            <Title title="About Me" line='line'/>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, excepturi? Corporis nostrum, unde doloribus, optio enim voluptatem dolorem molestias quia fugiat nulla, dicta voluptates? Molestias provident amet in quos esse.</p>
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
          <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, excepturi? Corporis nostrum, unde doloribus, optio enim voluptatem dolorem molestias quia fugiat nulla, dicta voluptates? Molestias provident amet in quos esse.</p>
        </div>
      </>
    }
      
    </>
  )
}
