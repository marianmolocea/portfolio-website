import React from 'react'
import { Link } from 'react-router-dom'
import './NavButton.css'

export default function NavButton(props) {
  return (
    <Link to={`/${props.name}`} >
      <div className="NavButton">
        <ion-icon name={props.icon} value={props.name}></ion-icon>
        <div className="item-name">{props.name.toUpperCase()}</div>
      </div>
    </Link>
  )
}
