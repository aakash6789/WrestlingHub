import React, { useState } from 'react'
import loginbg from '../assets/login3.jpeg'
import {useForm} from 'react-hook-form';
import { NavLink } from 'react-router-dom';
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      }

  return (
    <div className='md:h-[1200px] md:pt-[100px] text-white bg-black xs:h-[1000px]'>
      {/* <img src={loginbg} className='opacity-[0.8] absolute z-[-4] '/> */}
        <h1 className='md:text-8xl font-bebasNeue md:ml-[650px] md:mr-[630px] text-yellow-200 xs:ml-[210px] xs:text-4xl xs:mr-[200px] '>SIGN UP</h1>
        {/* <h1 className='text-6xl font-bebasNeue mt-[160px] ml-[660px] mr-[705px]'>SIGN UP</h1> */}
      <div className=' bg-white text-black md:w-[720px] md:h-[860px] md:ml-[400px] md:pt-[80px] md:mt-[40px] shadow-md md:shadow-white xs:h-[870px]'>
      <form action="" className='xs:mt-[30px] xs:pt-[30px] md:mt-[0px]' onSubmit={handleSubmit(onSubmit)}>
      <div className='md:text-left xs:text-center'>
            <label htmlFor="email" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[340px]'>Email *</label>
            <br/>
            <input id='email' name='email' type='email' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("email")}/>
        </div>
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="name" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[315px]'>First name</label>
            <br/>
            <input id='name' name='name' type='text' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2' {...register("name")}/>
        </div>
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="name" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[315px]'>Last name</label>
            <br/>
            <input id='name' name='name' type='text' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2' {...register("name")}/>
        </div>
        
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="password" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[310px]'>Password *</label>
            <br/>
            <input id='password' name='password' type='password' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("password",{
              required:true,
              minLength:4
            })}/>
        </div>
        <div className='md:text-left xs:text-center mt-[30px] xs:mb-[10px]'>  
            <label htmlFor="name" className='xs:text-left md:font-roboto md:ml-[31px] xs:mr-[315px] '>Phone no</label>
             <br/>
            <input id='name' name='phoneno' type='phone-no' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("phoneno")}/>
        </div>
        <div className='flex'>
        <input type="checkbox" id="consent_checkbox" name="vehicle1" value="Bike" className='md:ml-[30px] h-[20px] mt-[18px] xs:ml-[58px] xs:mt-[5px]'></input>
        <label htmlFor='consent_checkbox'>
        <p className='md:ml-[10px] md:w-[660px] rounded-md md:h-[96px] md:mt-[2px] xs:w-[363px] xs:h-[134px] xs:ml-[10px] '>
        I consent to receiving marketing communications from Wrestling World and its affiliates about special offers and other products or services based on my information and interests, including how I use and interact with the services, as described in the <a href='https://www.wwe.com/page/privacy-policy' target='_blank' className='text-blue-400'>Privacy Policy</a> . I can unsubscribe at any time using options available in the <a href='https://www.wwe.com/page/privacy-policy' target='_blank' className='text-blue-400'>Privacy Policy</a>.
        </p>
        </label>
        </div>
        <p className='md:ml-[240px] md:pl-[6px] md:mt-[15px] md:mr-[240px] xs:mt-[50px] xs:ml-[130px]'>Have an account? <NavLink to='/login' className='text-blue-400' >Login </NavLink> instead</p>
        <button type="submit" className='bg-black text-white md:mt-[25px] md:w-[660px] md:ml-[30px] p-[0.45rem] font-bebasNeue hover:bg-black hover:text-yellow-200 xs:mt-[20px] xs:ml-[60px] xs:w-[386px] xs:mb-[20px]'>Sign up</button>
      </form>
      </div>
    </div>
  )
}

export default Register;
//soon this will be complete
