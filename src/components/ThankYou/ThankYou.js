import React from 'react'
import { Link } from 'react-router-dom'
import './ThankYou.css'

export default function ThankYou() {
  return (
    <div className="ThankYou">
      <h1>Your message was successfully sent</h1>
      <h3>I will contact you as soon as possible</h3>
      <Link to="/">Back to home page</Link>
    </div>
  )
}
