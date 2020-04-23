import React from 'react'
import Title from '../Title/Title'
import './Projects.css'
import PopUpProject from './PopUpProject/PopUpProject'
import projectsData from './projectsData'
import { useState } from 'react'

export default function Projects() {

  let [isOpened, setIsOpened] = useState(false);
  let [itemIndex, setItemIndex] = useState(0)

  const handleClose = () =>setIsOpened(false)

  return (
    <>
      <div className="left-side">
        <Title title="projects" line='line' />
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti perspiciatis sit qui expedita, magnam magni eum optio? Fugiat laborum sed odit sit totam, tempora aliquid nobis dolorem possimus odio!</p>
      </div>
      <div className="right-side">
        <div className="Projects grid">
          {
            projectsData.map((project, index) => (
              <button
                key={project.title}
                className={`project-btn ${index % 2 ? 'first' : 'second'}`}
                onClick={() => {
                  setIsOpened(true);
                  setItemIndex(index)
                }}
              >
                {project.title}
              </button>
            ))
          }
        
          {
            isOpened && 
            <PopUpProject 
              handleClose={handleClose}
              img={projectsData[itemIndex].img}
              title={projectsData[itemIndex].title}
              stack={projectsData[itemIndex].stack.join(', ')}
              description={projectsData[itemIndex].description}
              liveUrl={projectsData[itemIndex].liveUrl}
              gitUrl={projectsData[itemIndex].gitUrl}
            />
          }
        </div>
      </div>
    </>
  )
}
