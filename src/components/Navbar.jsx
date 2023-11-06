
import React, { useEffect } from 'react'
// import {img1} from "";
import logo from "../assets/njpw3.jpg"
import logo1 from "../assets/images.jfif"
import logo3 from "../assets/aewlogo1.jpeg";
import useMediaQuery from '../hooks/useMediaQuery';
import { useState } from 'react';
import {FcDatabase} from 'react-icons/fc'
import {IoMdCloseCircleOutline} from 'react-icons/io';
import './navb.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Navbar = () => {
  const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
  const [isMenuToggled,setIsMenuToggled]=useState(false);
  const [logoe,setLogo]=useState(logo1);
  const [num,setNum]=useState(1);
  const {user}=useAuth();
  let name='';
  // setLogo(logo2);
  useEffect(()=>{
    const imgState=setInterval(()=>{
      if(num==1){
        setNum(2);
        setLogo(logo1);
      }else{
        setNum(1);
        setLogo(logo);
      }
      // console.log(user.firstName);
      name=user.firstName;

    },5*1000);
    // return () => clearInterval(imgState);
  },[user.firstName]);
  return (
   <div className='sticky top-0 z-[2]'>
    {/* DESKTOP NAV  */}
        {isAboveSmallScreens?<nav className='h-[50px] bg-black text-white flex '><div className=' w-[83px] py-[2px]'>
        <img src={logoe} className='fadeinout' />
        </div>
       
        < div className='flex  pl-[1050px] font-bebasNeue py-[14px] text-lg '>
        <div className='hover:text-yellow-400 transition duration-500 cursor-pointer'><NavLink to='/'>HOME</NavLink></div>
        
      <div className='ml-[40px] hover:text-yellow-400 transition duration-500 cursor-pointer'><NavLink to='/superstar'>SUPERSTARS</NavLink></div>
        
        <div className='hover:text-yellow-400 transition duration-500 ml-[40px] cursor-pointer '>CONTACT</div>
        {  (!user.firstName)?
          <div className='ml-[40px] hover:text-yellow-400 transition duration-500 cursor-pointer'><NavLink to='/login'>Login</NavLink></div>:<div className='ml-[40px] hover:text-yellow-400 transition duration-500 cursor-pointer'>{user.firstName}</div>}
          {/* <div className='ml-[40px] hover:text-yellow-400 transition duration-500 cursor-pointer'><NavLink to='/login'>Login</NavLink></div> */}
        
        </div></nav> : <nav className='h-[50px] bg-black text-white flex '>
        <div className=' mx-auto w-[50px] py-[px]'>
        <img src={logoe} className='fadeinout h-[50px] w-[70px]' />
        </div>
        <div className='absolute w-[30px] ml-[10px] h-[50px]'>
        <button onClick={()=>{setIsMenuToggled(!isMenuToggled)
        }}><FcDatabase className='h-[50px] w-8 pb-[2px]'/></button>
        </div>
        {/* MOBILE NAV  */}
        {!isAboveSmallScreens && isMenuToggled &&(<div  className= 'fixed left-0 top-[50px] bg-[#424242] py-[60px] text-white h-full w-[300px] font-bebasNeue text-2xl sidenav'>
        {/* <div className='absolute w-[60px] ml-[10px] '> */}
        {/* <button onClick={()=>{setIsMenuToggled(!isMenuToggled)}}><IoMdCloseCircleOutline className='fixed top-0 left-4px h-[50px] w-8'/></button> */}
        {/* </div> */}
        <div  className='ml-[8px] mt-[-50px]'>
          <div className='py-[8px] hover:cursor-pointer'><NavLink to='/'>HOME</NavLink></div>
          <div className='py-[8px]hover: cursor-pointer'><NavLink to='/superstar'>SUPERSTARS</NavLink></div>
          <div className='py-[8px] hover:cursor-pointer'>Contact</div>
          {  (!user.firstName)?
          <div className='py-[8px] hover:cursor-pointer'><NavLink to='/login'>Login</NavLink></div>:<div className='py-[8px] hover:cursor-pointer'>{user.firstName}</div>}
          </div>
        </div>) }
          
          </nav>}
       
        </div>

  )
}

export default Navbar

