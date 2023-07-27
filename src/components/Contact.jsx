import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../App.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ddprkd', 'template_af2fx3u', form.current, 'sKFleaINfjwVf9BGA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };  
  
  return (
    <div>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};