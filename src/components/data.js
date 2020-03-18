import React from 'react'
import Home from './Home/Home'
import About from './About/About'

export default function data() {
  return [
    {
      id: "Home",
      title: "Home",
      component: Home,
      description: "Experienced with JavaScript React HTML5 CSS3 & more to come."
    }
    {
      id: "About",
      title: "About me",
      component: About,
    description: "I put all the hard work in learning how to create clean and organized pieces of code. Even if I am at the beginning of this new career path, I think my keen for performance helped me to learn and apply a lot in some of the projects I worked on. Although I am a freshman in this domain, due to my fast learning ability I will grow my knowledge in no time and I will be able to bring value into the company which will give me the chance to prove myself."
    }
    {
      id: "Skills",
      title: "Skills",
      component: Skills,
      description: "Experienced with JavaScript React HTML5 CSS3 & more to come."
    }
    {
      id: "Portfolio",
      title: "Portfolio",
      component: Portfolio,
      description: "Experienced with JavaScript React HTML5 CSS3 & more to come."
    }
    {
      id: "Contact",
      title: "Contact",
      component: Contact,
      description: "Experienced with JavaScript React HTML5 CSS3 & more to come."
    }
  ]
}
