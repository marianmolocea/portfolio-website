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

    changePageContent() {
      return this.setState({ 
        home: !this.state.home,
        about: !this.state.about
       })
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
          <NavigationBar triggerPageContent={() => this.changePageContent()}/>
        </div>
    )

  }
}

/* export default function PageView() {
  let slag = this.props.match.params

  return (
    <Router>
      <div className="PageView">
        <Logo />
        <Social />
        <div className="container">
          <Route exact to='/' component={Home} /> 
          {slag.about || <About />} 
          <Route exact to='/skills' component={Skills} /> 
        </div>
        <NavigationBar />
      </div>
    </Router>
  )
} */
