import React from 'react';
import "../App.css";
import "../Contact.css"
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import Form from './Form';
// import { GrFacebook } from 'react-icons/gr';
// import { GrPaypal } from 'react-icons/gr';

export const Contact = () => {
  
  return (
    <div className='contact-container'>
      <div className='contact-info'> 
        <h1> get in touch! </h1>
        <p className='contact-text'>
        The members of Magdalena are eager to share the wonders of early music in all its forms and subgenres. To hire the ensemble, inquire about partnerships, or be an excitable early music nerd with us, please use the form or email us directly.<br />
          <br />
        if you would like to keep up to date with us, please follow our instagram and facebook linked below!
        </p>
        <div> magdalenga.ensemble@gmail.com </div>

          <div className='contact-icon-wrapper'>
            <a 
            target="_blank" 
            rel="noreferrer" 
            href='https://www.instagram.com/magdalena.ensemble/'
            className='contact-icon'>
              <GrInstagram />
            </a>
            
            <a 
            target="_blank" 
            rel="noreferrer" 
            href='https://www.facebook.com/profile.php?id=100094669223925'
            className='contact-icon'>
              <GrFacebook />
            </a>
          </div>
      </div>  
      <Form />
    </div>
  );
};