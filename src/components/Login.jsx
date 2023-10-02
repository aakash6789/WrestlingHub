import React from 'react'
import loginbg from '../assets/login3.jpeg'
import {useForm} from 'react-hook-form';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      }
  return (
    <div className='bg-black h-[1500px] pt-[180px]  text-white'>
      {/* <img src={loginbg} className='opacity-[0.8] '/> */}
        <h1 className='text-8xl font-bebasNeue ml-[660px] mr-[630px]   text-yellow-200'>SIGN UP</h1>
        {/* <h1 className='text-6xl font-bebasNeue mt-[160px] ml-[660px] mr-[705px]'>SIGN UP</h1> */}
      <div className=' bg-white text-black w-[720px] h-[800px] ml-[450px] pt-[80px]'>
      <form action="" className='' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex-col align-middle'>
            <label htmlFor="name" className='font-roboto ml-[31px]'>Name</label>
            <br/>
            <input id='name' name='name' type='text' className=' ml-[30px] border-[4px] w-[660px]' {...register("name")}/>
        </div>
        <div className='mt-[30px]'>
            <label htmlFor="email" className='font-roboto ml-[31px]'>Email</label>
            <br/>
            <input id='email' name='email' type='email' className='ml-[30px] border-[4px] w-[660px] '  {...register("email")}/>
        </div>
        <div className='mt-[30px]'>
            <label htmlFor="password" className='font-roboto ml-[31px]'>Password</label>
            <br/>
            <input id='password' name='password' type='password' className='ml-[30px] border-[4px] w-[660px]'  {...register("password",{
              required:true,
              minLength:4
            })}/>
        </div>
        <div className='mt-[30px]'>  
            <label htmlFor="name" className='font-roboto ml-[31px]'>Phone no</label>
            <br/>
            <input id='name' name='phoneno' type='phone-no' className='ml-[30px] border-[4px] w-[660px]'  {...register("phoneno")}/>
        </div>
      
        <button type="submit" className='bg-white text-black mt-[45px] ml-[140px] p-[0.45rem] rounded-xl'>Sign up</button>
      </form>
      </div>
    </div>
  )
}

export default Login;
//soon this will be complete
