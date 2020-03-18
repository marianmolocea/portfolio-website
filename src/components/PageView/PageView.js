import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Logo from '../Logo/Logo';
import Home from '../Home/Home';
/* import About from '../About/About'
import Skills from '../Skills/Skills' */
import Social from '../Social/Social';

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
      <Router>
        <div className="PageView">
          <Logo />
          <Social />
          <div className="container">
            <Home />
          </div>
          <NavigationBar />
        </div>
      </Router>
    );
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
