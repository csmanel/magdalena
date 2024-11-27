import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3ddprkd',
        'template_af2fx3u',
        form.current,
        'sKFleaINfjwVf9BGA'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="flex flex-col items-center justify-center w-[500px] h-[500px]"
        ref={form}
      >
        <input
          type="text"
          name="user_name"
          placeholder="name"
          className="bg-[var(--color-one)] w-[75%] h-[30px] rounded-[10px] border-none font-poppins italic text-black opacity-80 placeholder:text-black placeholder:italic placeholder:text-[16px] focus:bg-[#fad8b9] focus:text-[#222] hover:bg-[#f0bc7c] hover:text-[#222] outline-none mb-2 p-2"
          {...register('user_name', { required: true })}
          aria-invalid={errors.user_name ? 'true' : 'false'}
        />
        {errors.user_name?.type === 'required' && (
          <p className="text-red-500 text-[18px] mt-1 w-[75%]">
            name is required
          </p>
        )}

        <input
          type="email"
          name="user_email"
          placeholder="email"
          className="bg-[var(--color-one)] w-[75%] h-[30px] rounded-[10px] border-none font-poppins italic text-black opacity-80 placeholder:text-black placeholder:italic placeholder:text-[16px] focus:bg-[#fad8b9] focus:text-[#222] hover:bg-[#f0bc7c] hover:text-[#222] outline-none mb-2 p-2"
          {...register('user_email', { required: 'email address is required' })}
          aria-invalid={errors.user_email ? 'true' : 'false'}
        />
        {errors.user_email && (
          <p className="text-red-500 text-[18px] mt-1 w-[75%]">
            {errors.user_email?.message}
          </p>
        )}

        <textarea
          type="message"
          name="message"
          placeholder="message"
          className="bg-[var(--color-one)] w-[75%] h-[100px] rounded-[10px] border-none font-poppins italic text-black opacity-80 placeholder:text-black placeholder:italic placeholder:text-[16px] focus:bg-[#fad8b9] focus:text-[#222] hover:bg-[#f0bc7c] hover:text-[#222] outline-none mb-2 p-2 resize-none"
          {...register('message', { required: 'a message is required' })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="text-red-500 text-[18px] mt-1 w-[75%]">
            {errors.message?.message}
          </p>
        )}

        <input
          className="bg-[var(--color-five)] w-[150px] h-[30px] rounded-[10px] border-none font-bold text-black text-md cursor-pointer hover:border-2 hover:border-black hover:bg-transparent hover:text-black active:bg-black active:text-white active:border-none transition-all"
          type="submit"
          value="send"
        />
      </form>
    </div>
  );
};

export default Form;
