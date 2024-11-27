import React from 'react';
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import Form from './Form';

export const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-[rgba(189,126,74,0.856)] rounded-[15px] mt-32 z-10 w-[1000px]">
      <div className="contact-info flex flex-col items-center px-[50px] py-8 relative top-[-2rem]">
        <h1 className="text-2xl font-bold pb-8">Get in touch!</h1>
        <p className="contact-text text-center font-medium text-[16px] leading-relaxed mt-[-1rem]">
          The members of Magdalena are eager to share their love for early music
          with audiences around the world. To hire the ensemble, inquire about
          partnerships, or be an excitable early music nerd with us, please use
          the form or email us directly.
          <br />
          <br />
          If you would like to be apprised of our activities, please follow our
          Instagram and Facebook accounts!
        </p>
        <div className="text-lg mt-4">magdalena.ensemble@gmail.com</div>

        <div className=" flex justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/magdalena.ensemble/"
            className="contact-icon text-[#222] hover:text-[#ffe8cd] transition-all"
          >
            <GrInstagram size={24} />
          </a>

          {/* bug: facebook icon not showing up  */}
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100094669223925"
            className="contact-icon text-[#222] hover:text-[#ffe8cd] transition-all"
          >
            <GrFacebook size={24} />
          </a> */}
        </div>
      </div>

      <Form />
    </div>
  );
};
