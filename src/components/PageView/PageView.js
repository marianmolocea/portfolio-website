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
import ThankYou from '../ThankYou/ThankYou'

import './PageView.css';

export default function PageView() {
  return (
    <div className="PageView">
      <Logo />
      <Social />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thank-you" component={ThankYou} />
      </div>
      <Route path="/" component={NavigationBar} />
    </div>
  )
}