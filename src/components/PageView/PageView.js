import React from 'react'
import {Route} from 'react-router-dom'

import NavigationBar from '../NavigationBar/NavigationBar'
import Logo from './Logo/Logo'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Social from '../Social/Social'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

import './PageView.css';

export default function PageView() {
  return (
    <div className="PageView">
      <Logo />
      <Social />
      <div className="container">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </div>
      <NavigationBar />
    </div>
  )
}