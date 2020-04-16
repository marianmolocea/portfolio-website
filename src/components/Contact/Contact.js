import React from 'react'
import Title from '../Title/Title'
import './Contact.css'
import {Link} from 'react-router-dom'
import {IoMdAt} from 'react-icons/io'

export default function Contact() {
  return (
    <>
      <div className="left-side">
        <Title title="contact me" line='line' />
        <p className="description">Please use on of the following methods to contact me and I will get back to you as soon as possible.</p>
        <div className="ctaButtons">
          <Link to='' className='linkBtn'> GitHub</Link>
          <Link to='' className='linkBtn'> LinkedIn</Link>
        </div>
      </div>
      <div className="right-side">
        <form className="Contact-form animated forward fadeInRight" action="https://submit-form.com/iaCuGnpz2kraTRI8J6lWy" target="blank">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Your message..."></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}