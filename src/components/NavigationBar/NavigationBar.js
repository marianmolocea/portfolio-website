import './NavigationBar.css'
import NavButton from './NavButton/NavButton'
import React, { Component } from 'react'

export default class NavigationBar extends Component {
  constructor(){
    super();
    this.state = {
      pages: [
        {name: 'home', icon: 'home-outline'},
        {name: 'about', icon: 'person-outline'},
        {name: 'skills', icon: 'code-slash-outline'},
        {name: 'projects', icon: 'tv-outline'},
        {name: 'contact', icon: 'mail-outline'}
      ],
      activePage: ''
    }
  }
  
  render() {
    return (
      <div className="NavigationBar">
          {this.state.pages.map(button =>
              <NavButton 
                key={button.name}
                name={button.name}
                icon={button.icon}
              />
          )}
      </div>
    )
  }
}
