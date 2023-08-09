// import { AnimatePresence, motion } from 'framer-motion'
// import { useFormContext } from 'react-hook-form'
// import { MdError }  from 'react-icons/md'
// import  findInputError from './utils/findInputError'
// import  isFormInvalid from './utils/isFormInvalid'
// // import { FormProvider, useForm } from 'react-hook-form';

// export const Input = ({ type, name, placeholder }) => {
//   const { register, formState: {errors},} = useFormContext()

//   const inputError = findInputError(errors)
//   const isInvalid = isFormInvalid(inputError)

  
//   return(
//     <div>
//       <AnimatePresence mode="wait" initial={false}>
//         {isInvalid && (
//           <InputError 
//             message={inputError.error.message} 
//             key={inputError.error.message}
//           /> 
//         )}
//       </AnimatePresence>

//         <input 
//           type={type} 
//           name={name} 
//           placeholder={placeholder}
//           {...register({name}, {
//             required: {
//               value:true,
//               message: 'required',
//             },
//           })} 
//         />
//     </div>
//   )
// }

// export const TextArea =({name, placeholder }) => {
//   return (
//     <div>
//       <textarea name={name} placeholder={placeholder}/>
//     </div>
//   )
// }

// const InputError = ({ message }) => {
// return(
//   <motion.p
//     className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
//     {...framer_error}>
//     <MdError />
//     {message}
//   </motion.p>
//   )
// }

// const framer_error = {
//   initial: { opacity: 0, y: 10 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 10 },
//   transition: { duration: 0.2 },
// }
