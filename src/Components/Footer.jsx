import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import './styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer__content">
      <div>
        <h3>Please visit me click below for more </h3>
      </div>
      <div className="icons">
        <div>
          <a href='https://www.linkedin.com/feed/' alt='_blank' className='icon'> <FaLinkedin /> </a>
        </div>
        <div>
          <a href='https://www.facebook.com/' className='icon'> <FaFacebookF /> </a>
        </div>
        <div>
          <a href='https://www.instagram.com/?msclkid=588a66a8d12411ec8d8c1756cdb09162' className='icon'> <FaInstagram />
          </a>
        </div>
        <div>
          <a href='https://github.com/yonie3124?tab=repositories' className='icon' > <FaGithub /> </a>
        </div>
      </div>
    </div>
  )
}
