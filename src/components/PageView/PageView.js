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
      let value = e.target.getAttribute('value')
      this.setState({ value })
    };

  render() {
    return (
        <div className="PageView">
          <Logo />
          <Social />
          <div className="container">
            {Object.values(this.state).length === 0 && <Home />}
            {this.state.value === 'Home' && <Home />}
            {this.state.value === 'About' && <About />}
            {this.state.value === 'Skills' && <Skills />}
            {this.state.value === 'Portfolio' && <Projects />}
            {this.state.value === 'Contact' && <Contact />}
          </div>
          <NavigationBar pageContentTrigger={(e) => this.changePageContent(e)}/>
        </div>
    )
  }
}