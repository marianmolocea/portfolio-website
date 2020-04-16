import React from 'react'
import './Project.css'


export default function Project({img, link}) {
  return (
    <div className='Project'>
      <a target='_blank' href={link} rel="noopener noreferrer">
        <img src={img} alt='projects'/>
      </a>
    </div>
  )
}
