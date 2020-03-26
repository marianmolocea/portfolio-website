import './NavigationBar.css'
import NavButton from './NavButton/NavButton'
import React, { Component } from 'react'

export default class NavigationBar extends Component {
  constructor(){
    super();
    this.state = [
      {name: 'home', icon: 'home-outline'},
      {name: 'about', icon: 'person-outline'},
      {name: 'skills', icon: 'code-slash-outline'},
      {name: 'portfolio', icon: 'tv-outline'},
      {name: 'contact', icon: 'mail-outline'}
    ]    
  }

  render() {
    return (
      <div className="NavigationBar">
          {this.state.map(button => 
            <NavButton 
              name={button.name}
              icon={button.icon}
              hey={button.name}
            />
          )}
      </div>
    )
  }
}
