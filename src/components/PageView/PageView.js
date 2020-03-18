import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'
import Logo from '../Logo/Logo'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Social from '../Social/Social'

import './PageView.css'

export default function PageView() {
  return (
    <Router>
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
    </Router>
  )
}
