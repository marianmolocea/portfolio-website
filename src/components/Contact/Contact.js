import React, {useState} from 'react'
import Title from '../Title/Title'
import ContactForm from './ContactForm'
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
        <ContactForm />
      </div>
    </>
  )
}