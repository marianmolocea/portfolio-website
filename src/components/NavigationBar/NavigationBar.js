import React from 'react';
import { Link } from 'react-router-dom'

import './NavigationBar.css'

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <Link to='/'><ion-icon name="home-outline"></ion-icon></Link>
      <Link to='/about'><ion-icon name="person-outline"></ion-icon></Link>
      <ion-icon name="code-slash-outline"></ion-icon>
      <ion-icon name="tv-outline"></ion-icon>
      <ion-icon name="mail-outline"></ion-icon>
    </div>
  );
}
