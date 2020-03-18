import React, { Component } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Logo from '../Logo/Logo'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Social from '../Social/Social'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

import './PageView.css';

export default class PageView extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      about: false,
      skills: false,
      portfolio: false,
      contact: false
    };
  }

  changePageContent = key => {
    return this.state[key] ? false : true;
  };

  render() {
    return (
        <div className="PageView">
          <Logo />
          <Social />
          <div className="container">
            {
              this.state.home ?
                <Home /> :
                this.state.about ?
                  <About /> :
                  this.state.skills ?
                    <Skills /> :
                    this.state.portfolio ?
                      <Projects /> :
                      <Contact />
            }
          </div>
          <NavigationBar />
        </div>
    )

  }
}

/* export default function PageView() {
  return (
      <div className="PageView">
        <Logo />
        <Social />
        <div className="container">
          <Route exact to='/' component={Home} /> 
          <Route exact to='/about' component={About} /> 
          <Route exact to='/skills' component={Skills} /> 
        </div>
        <NavigationBar />
      </div>

  )
} */
