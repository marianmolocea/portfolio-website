import React from 'react'
import Title from '../Title/Title'
import Project from './Project/Project'
import './Projects.css'
import kodflix from '../../images/project-images/kodflix.png'
import beachResort from '../../images/project-images/beachResort.png'
import forkify from '../../images/project-images/forkify.png'
import liveChat from '../../images/project-images/liveChat.png'

export default function Projects() {
  return (
    <>
      <div className="left-side">
        <Title title="projects" line='line' />
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti perspiciatis sit qui expedita, magnam magni eum optio? Fugiat laborum sed odit sit totam, tempora aliquid nobis dolorem possimus odio!</p>
      </div>
      <div className="right-side">
        <div className="Projects grid">
          <Project img={kodflix} link='https://kodflix-ian.netlify.com/'/>
          <Project img={beachResort} link='https://resort-react-app-mm.netlify.com/'/>
          <Project img={liveChat} link='https://live-chat-react-app-mm.netlify.com/'/>
          <Project img={forkify} link='https://forkify-recipe-js-app-mm.netlify.com/'/>
        </div>
      </div>
    </>
  )
}
