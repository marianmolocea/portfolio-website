import React from "react";
import './Contact.css'

export default function ContactForm() {
  return (
    <form
      className="Contact-form animated forward fadeInRight"
      action="https://submit-form.com/iaCuGnpz2kraTRI8J6lWy"
      target="blank"
    >
      <input
        type="checkbox"
        name="_honeypot"
        tabindex="-1"
        autocomplete="off"
        className='honeypot'
      />
      <input type="text" name="name" placeholder="Name" required />
      <input
        type="text"
        name="email"
        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        placeholder="Your message..."
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
