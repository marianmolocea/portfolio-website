import React from 'react'
import './Title.css'

export default function Title({title}) {
  return (
    <div className="Title">
      {title.toUpperCase()}
    </div>
  )
}
