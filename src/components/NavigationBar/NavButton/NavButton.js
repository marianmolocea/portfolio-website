import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavButton.css'

export default function NavButton({name, icon}) {
  let pathName = window.location.hash
  return (
    <NavLink to={`/${name === 'home' ? '' : name}`} activeClassName={name === 'home' && pathName === '#/' ? 'active' : name !== 'home' ? 'active' : ''} className="NavButton">
        <ion-icon name={icon} value={name}></ion-icon>
        <div className="item-name">{name.toUpperCase()}</div>
    </NavLink>
  )
}
