import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FormProvider} from 'react-hook-form';
import { Input, TextArea } from './Input';
import { useForm } from 'react-hook-form'
import "../Contact.css"

const Form = () => {
  // const methods = useForm()
  const form = useRef()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ddprkd', 'template_af2fx3u', form.current, 'sKFleaINfjwVf9BGA')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };  
  
  return (
    <div>
      {/* <FormProvider {...methods}> */}
        <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='contact-form'
        ref={form}
        >
        {/* // noValidate  
        // className='contact-form' 
        // ref={form} 
        // onSubmit={sendEmail}>*/}
          
          {/* <Input type={"text"} name={"user_name"} placeholder={"name"}/>
          <Input type={"email"} name={"user_email"} placeholder={"email"}/>
          <TextArea name={"message"} placeholder={"message"}/> */}
              
        <input 
          type="text" 
          name="user_name" 
          placeholder="name" 
          {...register("user_name", {required: true })} 
          aria-invalid={errors.user_name ? "true" : "false"}
        />
        {errors.user_name?.type === 'required' && <p className='form-error'role="alert">name is required</p>}

        <input 
          type="email" 
          name="user_email"
          placeholder="email"
          {...register("user_email", { required: "email address is required" })} 
          aria-invalid={errors.user_email ? "true" : "false"}
        />
        {errors.user_email && <p className='form-error' role="alert">{errors.user_email?.message}</p>}

        <textarea 
          type="message" 
          name="message" 
          placeholder="message"
          {...register("message", {required: "a message is required"})}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className='form-error' role="alert">{errors.message?.message}</p>}


        <input type="submit" value="Send" />
        
        </form>
      {/* </FormProvider> */}
    </div>
  )
}

export default Form
