import './NavigationBar.css'

import React, { Component } from 'react'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <button onClick={this.props.pageContentTrigger} value="home">
          <ion-icon name="home-outline" value="Home"></ion-icon>
        </button>
        <button onClick={this.props.pageContentTrigger}>
          <ion-icon name="person-outline" value="About"></ion-icon>
        </button>
        <button onClick={this.props.pageContentTrigger}>
          <ion-icon name="code-slash-outline" value="Skills"></ion-icon>
        </button>
        <button onClick={this.props.pageContentTrigger}>
          <ion-icon name="tv-outline" value="Portfolio"></ion-icon>
        </button>
        <button onClick={this.props.pageContentTrigger}>
          <ion-icon name="mail-outline" value="Contact"></ion-icon>
        </button>
      </div>
    )
  }
}
