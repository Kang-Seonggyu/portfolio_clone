import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine, RiWhatsappLine} from "react-icons/ri";
import emailjs from 'emailjs-com';


const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_txzwv2m', 'template_6kyab27', formRef.current, 'bGo3hJNzzeEQzAdI8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>jokekim609@gmail.com</h5>
            <a href="mailto:jokekim609@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>jokekim609@gmail.com</h5>
            <a href="https://m.me//profile.php?id=100088399418527">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>111-111</h5>
            <a href="https://api.whatsapp.com/send?phone+111111">Send a message</a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" row="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact