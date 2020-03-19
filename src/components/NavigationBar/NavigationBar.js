import './NavigationBar.css'

import React, { Component } from 'react'

export default class NavigationBar extends Component {
  render() {
    return (
<div className="NavigationBar">
      <button onClick={this.props.triggerPageContent}><ion-icon name="home-outline"></ion-icon></button>
      <ion-icon name="person-outline"></ion-icon>
      <ion-icon name="code-slash-outline"></ion-icon>
      <ion-icon name="tv-outline"></ion-icon>
      <ion-icon name="mail-outline"></ion-icon>
    </div>
    )
  }
}
