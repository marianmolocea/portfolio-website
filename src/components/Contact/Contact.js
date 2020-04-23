import React, {useState} from 'react'
import Title from '../Title/Title'
import './Contact.css'
import {MdContentCopy} from 'react-icons/md'

export default function Contact() { 

  let [emailText, setEmailText] = useState('marian.mcrt@gmail.com')

  async function copyEmail() {
    let copyText = document.getElementById("email-address").textContent
    try {
      await navigator.clipboard.writeText(copyText)
      setEmailText('Copied to clipboard');
      setTimeout(() => setEmailText('marian.mcrt@gmail.com'), 2000);
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  return (
    <>
      <div className="left-side">
        <Title title="contact me" line='line' />
        <p className="description">Please use on of the following methods to contact me and I will get back to you as soon as possible.</p>
        <div className='linkBtn twoBtn'>
          <a id="email-address" href='mailto:marian.mcrt@gmail.com'>
            {emailText}
          </a>
          <button 
            className='copyBtn'
            onClick={() => copyEmail()}><MdContentCopy /></button>
        </div>
        <div className="ctaButtons">
          <a href="https://github.com/marianmolocea" target="blank" rel="noopener noreferrer" className='linkBtn'> GitHub</a>
          <a href="https://www.linkedin.com/in/marian-molocea/" target="blank" rel="noopener noreferrer" className='linkBtn'> LinkedIn</a>
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