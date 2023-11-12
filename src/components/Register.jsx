import React, { useState } from 'react'
import loginbg from '../assets/login3.jpeg'
import {useForm} from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { number } from 'yup';
import Login from './Login.jsx';
import Dropzone from 'react-dropzone';
const Register = () => {
  const [text,setText]=useState("");
  const[flag,setFlag]=useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
const formData={
  email:"",
  firstName:"",
  lastName:"",
  password:"",
  phoneNo:number
}

      const onSubmit=(data)=>{
         setText("");
       for(let prop in formData){
        // console.log(prop);
         formData[prop]=data[prop];
         }
        //  console.log(formData);
         callReg();

      }
      const onError=()=>{
        console.log("enter again");
        setText("Some details are missing, please enter all the details");
      }
      const callReg=async(req,res)=>{
        const formDataJson=JSON.stringify(formData);
         const savedUserResponse=await fetch(
          "http://localhost:3000/auth/register",{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:formDataJson
          }
         ).then(res=>{
          if(res.status===201){
            setFlag(1);
          }
          if(res.status===409){
            setText("User already exists,try logging in");
          }
         })
         .catch(err=>{
           console.log("Error is:",err);
         })
      }

  return (
    <div>
      {flag===1?<Login/>:(
    <div className='md:h-[1300px] md:pt-[100px] text-white bg-black xs:h-[1200px]'>
      {/* <img src={loginbg} className='opacity-[0.8] absolute z-[-4] '/> */}
        <h1 className='md:text-8xl font-bebasNeue md:ml-[650px] md:mr-[630px] text-yellow-200 xs:ml-[225px] xs:text-4xl xs:mr-[150px] '>SIGN UP</h1>
        {/* <h1 className='text-6xl font-bebasNeue mt-[160px] ml-[660px] mr-[705px]'>SIGN UP</h1> */}
       
      <div className=' bg-white text-black md:w-[720px] md:h-[990px] md:ml-[400px] md:pt-[80px] md:mt-[40px] shadow-md md:shadow-white xs:h-[990px]'>
      <form action="" className='xs:mt-[30px] xs:pt-[30px] md:mt-[0px]' onSubmit={handleSubmit(onSubmit,onError)} encType="multipart/form-data">
      <div className='md:text-left xs:text-center'>
            <label htmlFor="email" className='xs:text-left font-roboto md:ml-[31px] xs:mr-[340px]'>Email *</label>
            <br/>
            <input id='email' name='email' type='email' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("email",{
              required:true,
              minLength:6,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}/>
            {errors.email && errors.email.type === "required" && (
            <p className="errorMsg text-red-500 md:ml-[30px] xs:mr-[260px]">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg text-red-500 md:ml-[30px] xs:mr-[260px]">Email is not valid.</p>
          )}
        </div>
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="name" className='xs:text-left font-roboto md:ml-[31px] xs:mr-[315px]'>First name</label>
            <br/>
            <input id='name' name='firstName' type='text' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2' {...register("firstName")}/>
        </div>
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="name" className='xs:text-left font-roboto md:ml-[31px] xs:mr-[315px]'>Last name</label>
            <br/>
            <input id='lastName' name='lastName' type='text' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2' {...register("lastName")}/>
        </div>
        
        <div className='md:text-left xs:text-center mt-[30px]'>
            <label htmlFor="password" className='xs:text-left font-roboto md:ml-[31px] xs:mr-[310px]'>Password *</label>
            <br/>
            <input id='password' name='password' type='password' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("password",{
              required:true,
              minLength:4
            })}/>
            {errors.password && errors.password.type === "required" && (
            <p className="errorMsg text-red-500 ml-[30px] xs:mr-[262px]">Password is required.</p>
          )}
            {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg text-red-500 md:ml-[32px]">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div className='md:text-left xs:text-center mt-[30px] xs:mb-[10px]'>  
            <label htmlFor="phoneNo" className='xs:text-left font-roboto md:ml-[31px] xs:mr-[315px] '>Phone no</label>
             <br/>
            <input id='phoneNo' name='phoneNo' type='phone-no' className='xs:w-[386px] xs:h-[54px] xs:mt-[5px] md:ml-[30px] border-[4px] md:w-[660px] rounded-md md:h-[48px] md:mt-[5px] md:p-2'  {...register("phoneNo")}/>
        </div>
        {/* <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                   
                  ></Dropzone> */}
                  {/* <Dropzone></Dropzone> */}
                  <div className='md:text-left xs:text-center mt-[30px] xs:mb-[10px] md:ml-[32px] md:mb-[10px] '>
                  <label htmlFor="picture" className='font-roboto md:mr-[130px] xs:mr-[280px]'>Profile Picture*</label>
                  <br/>
                    <input type='file' name='picture' id='picture' className='xs:mr-[90px] xs:mt-[20px] xs:mb-[20px]' {...register("picture",{
              required:true
            })}></input>
             {errors.image && errors.image.type === "required" && (
            <p className="errorMsg text-red-500 ml-[30px] xs:mr-[262px]">Picture is required.</p>
          )}
                     </div>
        <div className='flex'>
        <input type="checkbox" id="consent_checkbox" name="consent_checkbox"  className='md:ml-[30px] h-[20px] mt-[18px] xs:ml-[65px] xs:mt-[5px]' 
        {...register("consent_checkbox",{
          required:true
        })}
        ></input>
        <label htmlFor='consent_checkbox'>
        <p className='md:ml-[10px] md:w-[660px] rounded-md md:h-[96px] md:mt-[2px] xs:w-[363px] xs:h-[134px] xs:ml-[10px] '>
        I consent to receiving marketing communications from Wrestling World and its affiliates about special offers and other products or services based on my information and interests, including how I use and interact with the services, as described in the <a href='https://www.wwe.com/page/privacy-policy' target='_blank' className='text-blue-400'>Privacy Policy</a> . I can unsubscribe at any time using options available in the <a href='https://www.wwe.com/page/privacy-policy' target='_blank' className='text-blue-400'>Privacy Policy</a>.
        </p>
        </label>
        </div>
        <p className='md:ml-[240px] md:pl-[6px] md:mt-[15px] md:mr-[240px] xs:mt-[50px] xs:ml-[130px]'>Have an account? <NavLink to='/login' className='text-blue-400' >Login </NavLink> instead</p>
        {text && (<p className='text-red-500 text-center pt-[20px]'>{text}</p>)}
        <button type="submit" className='bg-black text-white md:mt-[25px] md:w-[660px] md:ml-[30px] p-[0.45rem] font-bebasNeue  hover:text-yellow-200 xs:mt-[20px] xs:ml-[60px] xs:w-[386px] xs:mb-[20px]'>Sign up</button>
      </form>
      </div>
      </div>
      )}
    </div>
  )
}

export default Register;
//soon this will be complete
