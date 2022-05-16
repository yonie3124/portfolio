import React from 'react';
import './styles/Email.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_azxapb6', 'template_vxjen3b', form.current, 'chv0QUhm68a3QETjA')
    e.target.reset()

  };
  return (
    <div>
      <div id='headerContact'>
        <h2>For more feel free to contact me by any of the following</h2>
      </div>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yonie3124@gmail.com</h5>
            <a href='mailto:yonie3124@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Yonas Kessete Kifle</h5>
            <a href='https://m.me/yonas.kessete.7' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+31685062387</h5>
            <a href="https://api.whatsapp.com/send?phone=31685062387" target='_blank' >Send a message</a>
          </article>
        </div>
        <div id='formContact'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-praimary '>Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

