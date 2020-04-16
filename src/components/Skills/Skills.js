import React from 'react'
import Title from '../Title/Title'
import './Skills.css'
import images from '../../images/imageData'

export default function Skills() {
  let mySkills = ['javaScript', 'html', 'css', 'node', 'react', 'heroku']
  return (
    <>
     <div className="left-side">
        <Title title="skills" line='line' />
        <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore autem labore, commodi harum veniam vel quia, eum vero voluptatem id magnam alias quisquam ut, aliquid fugiat corporis ullam sint.</p>
      </div>
      <div className="right-side">
        <div className="Skills grid">
          {
            mySkills
              .map(skill => (
                <img className="skills-icons animated forward jackInTheBox" src={images()[skill]} alt={skill} key={skill} />
              ))
          }
        </div>
      </div>
    </>
  )
}
