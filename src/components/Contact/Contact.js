import React from 'react'
import Title from '../Title/Title'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="left-side">
        <Title title="contact me" line='line' />
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem suscipit in, iusto nam, eius quaerat dolorum ex officia est at, sint quisquam ad commodi perspiciatis consectetur repellat nostrum excepturi?</p>
      </div>
      <div className="right-side">
        <form className="Contact-form animated forward fadeInRight" action="https://submit-form.com/iaCuGnpz2kraTRI8J6lWy" target="blank">
{/*           <input
            type="hidden"
            name="_redirect"
            value="https://your-website.com/thanks.html"
          /> */}
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Your message..."></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}