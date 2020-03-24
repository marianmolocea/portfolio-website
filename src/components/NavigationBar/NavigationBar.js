import './NavigationBar.css'

import React, { Component } from 'react'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <button className="home active" onClick={this.props.pageContentTrigger}>
          <ion-icon name="home-outline" value="home"></ion-icon>
        </button>
        <button className="about" onClick={this.props.pageContentTrigger}>
          <ion-icon name="person-outline" value="about"></ion-icon>
        </button>
        <button className="skills" onClick={this.props.pageContentTrigger}>
          <ion-icon name="code-slash-outline" value="skills"></ion-icon>
        </button>
        <button className="portfolio" onClick={this.props.pageContentTrigger}>
          <ion-icon name="tv-outline" value="portfolio"></ion-icon>
        </button>
        <button className="contact" onClick={this.props.pageContentTrigger}>
          <ion-icon name="mail-outline" value="contact"></ion-icon>
        </button>
      </div>
    )
  }
}
