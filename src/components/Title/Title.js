import React from 'react'
import './Title.css'

export default function Title({title}) {
  return (
    <div className="Title animated forward fadeInLeft">
      {title.toUpperCase()}
      <div className="line"></div>  
    </div>
  )
}
