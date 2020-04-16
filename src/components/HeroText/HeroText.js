import React from 'react'
import './HeroText.css'
import Title from '../Title/Title'

export default function HeroText() {
  return (
    <div className="HeroText">
      <h1>Hi!</h1>
      <h1>I'm Ian and I am a</h1>
      <Title title="Web Developer" line=''/>
      <p>Experienced with JavaScript, React, HTML5, CSS3 & more to come.</p>
    </div>
  )
}
