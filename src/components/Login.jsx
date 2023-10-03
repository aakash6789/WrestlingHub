import React, { useState } from 'react'
import loginbg from '../assets/login3.jpeg'
import {useForm} from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const { reset } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      }
  return (
    <div className='bg-black md:h-[640px] xs:h-[532px]'>
             <h1 className='md:text-8xl font-bebasNeue md:ml-[655px] md:mr-[630px] text-yellow-200 xs:ml-[210px] xs:text-4xl xs:mr-[195px] xs:pl-[12px]'>SIGN IN</h1>
        {/* <h1 className='text-6xl font-bebasNeue mt-[160px] ml-[660px] mr-[705px]'>SIGN UP</h1> */}
      <div className=' bg-white text-black md:w-[720px] md:h-[480px] md:ml-[400px] md:pt-[80px] md:mt-[40px] shadow-md  xs:h-[430px]'>
      <form action="" className='xs:mt-[30px] xs:pt-[30px] md:mt-[0px]' onSubmit={handleSubmit(onSubmit)}>
      <div className='md:text-left xs:text-center'>
            <label htmlFor="email" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[340px]'>Email *</label>
            <br/>
            <input id='email' name='email' type='email' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("email",{
              required:true,
              minLength:4,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}/>
            {errors.email && errors.email.type === "required" && (
            <p className="errorMsg text-red-500 md:ml-[30px] xs:mr-[260px]">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg text-red-500 md:ml-[30px] xs:mr-[260px] ">Email is not valid.</p>
          )}
        </div>
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="password" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[310px]'>Password *</label>
            <br/>
            <input id='password' name='password' type='password' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("password",{
              required:true,
              minLength:6
            })}/>
            {errors.password && errors.password.type === "required" && (
            <p className="errorMsg text-red-500 ml-[30px] xs:mr-[262px]">Password is required.</p>
          )}
            {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg text-red-500 ml-[30px] xs:mr-[120px]">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
    
        <p className='md:ml-[200px] md:pl-[6px] md:mt-[15px] md:mr-[200px] xs:mt-[50px] xs:ml-[110px]'>Don't have an account? <NavLink to='/register' className='text-blue-400' >Register </NavLink> instead</p>
        <button type="submit" className='bg-black text-white md:mt-[25px] md:w-[660px] md:ml-[30px] p-[0.45rem] font-bebasNeue hover:bg-black hover:text-yellow-200 xs:mt-[20px] xs:ml-[60px] xs:w-[386px] xs:mb-[20px]'>Sign in</button>
      </form>
      </div>
    </div>
  )
}

export default Login
