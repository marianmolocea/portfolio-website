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
        <p className="description">During my journey as a web developer, I built a couple of projects. Although the main functionalities of these projects are implemented, still more improvements can be done. In time I will update the projects to reflect my latest knowledge about the technologies I work with.</p>
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
              stack={projectsData[itemIndex].stack}
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
