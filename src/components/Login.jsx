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
    <div className='bg-black h-[2000px] text-white'>
      <img src={loginbg} className='opacity-[0.8] '/>
        <h1 className='text-8xl font-bebasNeue mt-[160px] ml-[660px]  absolute top-[90px] right-[280px] text-yellow-200'>SIGN UP/ sign in</h1>
        {/* <h1 className='text-6xl font-bebasNeue mt-[160px] ml-[660px] mr-[705px]'>SIGN UP</h1> */}
      <div className=' w-[800px] h-[800px] ml-[350px] pt-[300px]'>
      <form action="" className='' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name" className='font-roboto'>Name</label>
            <input id='name' name='name' type='text' className='ml-[38px] pr-[100px]' {...register("name")}/>
        </div>
        <div className='mt-[30px]'>
            <label htmlFor="email" className='font-roboto'>Email</label>
            <input id='email' name='email' type='email' className='text-black ml-[38px] pr-[100px] '  {...register("email")}/>
        </div>
        <div className='mt-[30px]'>
            <label htmlFor="password" className='font-roboto'>Password</label>
            <input id='password' name='password' type='password' className='text-black ml-[10px] pr-[100px]'  {...register("password")}/>
        </div>
        <div className='mt-[30px]'>  
            <label htmlFor="name" className='font-roboto'>Phone no</label>
            <input id='name' name='phoneno' type='phone-no' className='text-black ml-[10px] pr-[100px]'  {...register("phoneno")}/>
        </div>
        <div className='mt-[30px]'>  
            <label htmlFor="name" className='font-roboto'>Phone no</label>
            <input id='name' name='phoneno' type='phone-no' className='text-black ml-[10px] pr-[100px]'  {...register("phoneno")}/>
        </div>
        <button type="submit" className='bg-white text-black mt-[45px] ml-[140px] p-[0.45rem] rounded-xl'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login;
//soon this will be complete
