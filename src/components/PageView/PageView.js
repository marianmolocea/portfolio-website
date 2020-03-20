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
    this.state = {};
  }

    changePageContent(e) {
      let key = e.target.getAttribute('value')
      this.setState({ key })
    };

  render() {
    return (
        <div className="PageView">
          <Logo />
          <Social />
          <div className="container">
            {Object.keys(this.state).length === 0 && <Home />}
            {this.state.key === 'Home' && <Home />}
            {this.state.key === 'About' && <About />}
            {this.state.key === 'Skills' && <Skills />}
            {this.state.key === 'Portfolio' && <Projects />}
            {this.state.key === 'Contact' && <Contact />}
          </div>
          <NavigationBar pageContentTrigger={(e) => this.changePageContent(e)}/>
        </div>
    )
  }
}