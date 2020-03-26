import React from 'react'
import logo from '../../images/logo600x600.png'
import './Logo.css'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <img className="Logo" src={logo} alt="Marian Molocea" />
    </Link>
  )
}
