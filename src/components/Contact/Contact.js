import React from 'react'
import Title from '../Title/Title'
import './Contact.css'

export default function Contact() {
  return (
    <div className="Contact">
      <div className="left-side">
        <Title title="contact me" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem suscipit in, iusto nam, eius quaerat dolorum ex officia est at, sint quisquam ad commodi perspiciatis consectetur repellat nostrum excepturi?</p>
      </div>
      <div className="right-side">
        <form action="https://submit-form.com/iaCuGnpz2kraTRI8J6lWy" target="_self">
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message"></textarea>
          <input type="text" name="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}