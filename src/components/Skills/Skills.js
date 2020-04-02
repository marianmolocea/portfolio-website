import React from 'react'
import Title from '../Title/Title'
import './Skills.css'
import images from '../../images/imageData'

export default function Skills() {
  let mySkills = ['javaScript', 'html', 'css', 'node', 'react', 'heroku']
  return (
    <>
     <div className="left-side">
        <Title title="skills" />
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem suscipit in, iusto nam, eius quaerat dolorum ex officia est at, sint quisquam ad commodi perspiciatis consectetur repellat nostrum excepturi?</p>
      </div>
      <div className="right-side">
        <div className="Skills grid">
          {console.log(images())}
          {
            mySkills
              .map(skill => (
                <img className="skills-icons" src={images()[skill]} />
              ))
          }
        </div>
      </div>
    </>
  )
}
