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
      let value = e.target.getAttribute('value');
      let element = document.querySelector(`.${value}`)
      let classNames = element.getAttribute('class');
      let child = document.querySelector('.NavigationBar').childNodes
      child.forEach(el => {
        if(el.getAttribute('class').includes('active') && (el !== classNames)){
          el.classList.remove('active')
        }
      })
      if(!classNames.includes('active')){
        element.classList.add('active');   
      } 
      this.setState({ value });
    };

  render() {
    return (
      <div className="PageView">
        <Logo />
        <Social />
        <div className="container">
          {Object.values(this.state).length === 0 && <Home />}
          {this.state.value === 'home' && <Home />}
          {this.state.value === 'about' && <About />}
          {this.state.value === 'skills' && <Skills />}
          {this.state.value === 'portfolio' && <Projects />}
          {this.state.value === 'contact' && <Contact />}
        </div>
        <NavigationBar 
          pageContentTrigger={(e) => this.changePageContent(e)}
        />
      </div>
    )
  }
}