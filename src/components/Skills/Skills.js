import React from 'react'
import Title from '../Title/Title'
import './Skills.css'
import images from '../../images/imageData'

export default function Skills() {
  let mySkills = ['javaScript', 'react', 'git', 'html', 'css', 'node', 'npm', 'heroku', 'sass'];
  let skillsTag = ['JavaScript', 'React Js', 'GitHub', 'HTML', 'CSS', 'Node.js', 'NPM', 'Heroku', 'SASS', 'MongoDB', 'Netlify']
  return (
    <>
     <div className="left-side">
        <Title title="skills" line='line' />
        <p className="description">Up to this point, while building my projects I worked mainly with <span>JavaScript</span>. As you can see in the project section, most of my projects are built using <span>React JS</span>, my favourite library in which I am more than comfortable to build web applications from scratch. For the design part I use mostly <span>CSS</span>, but, at the same time I’m learning <span>SASS</span> for my feature projects. I use <span>Node JS</span> for the backend of my projects and <span>MongoDB</span> for the database. On a daily basis I use <span>GitHub</span> for the version control of my application. To deploy the applications I'm using <span>Heroku</span> and <span>Netlify</span>.</p>
        <div className="skills-tag">
          {
            skillsTag.map(skill => (
              <label key={skill} className="tag">{skill}</label>
            ))
          }
        </div>
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
