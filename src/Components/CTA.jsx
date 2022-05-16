import React from 'react';
import CV from './styles/MyCvUpdated.pdf';
import'./styles/CTA.css';

export default function CTA () {
  return (
    <div className='cta'>
    <a href={CV} className='btn, download'>Download CV</a>
    </div>
  )
}
