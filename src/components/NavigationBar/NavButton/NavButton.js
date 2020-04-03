import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavButton.css'

export default function NavButton(props) {

  return (
    <NavLink to={`/${props.name === 'home' ? 'home' : props.name}`} activeClassName={'active'}>
      <div className="NavButton">
        <ion-icon name={props.icon} value={props.name}></ion-icon>
        <div className="item-name">{props.name.toUpperCase()}</div>
      </div>
    </NavLink>
  )
}
