import React from 'react'
import './Project.css'


export default function Project({img, link}) {
  return (
    <div className='Project'>
      <a target='_blank' href={link}>
        <img src={img} />
      </a>
    </div>
  )
}
