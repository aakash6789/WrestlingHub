import React from 'react'
import Banner from '../assets/wrestleMania2.jpg'
import Banner1 from '../assets/wrestleMania.jpg'
import useMediaQuery from '../hooks/useMediaQuery'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import superStarTile from '../assets/Superstar_tile3.png';
import gmoatTile from '../assets/gmoat_tile3.jpg';
import wwebanner from '../assets/WWE_BANNER.jpg'
import smackdownbanner from '../assets/SMACK_DOWN_BANNER.jpg'
import nxtbanner from '../assets/NXT_BANNER2.jpeg'
import rivalriesTile from '../assets/rivalries_tile2.jpg';
import aewbanner from '../assets/aewam.png';
import aewbanner2 from '../assets/aewbanner.png';
import { NavLink,useLocation } from 'react-router-dom';
const Hero = () => {
const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
const [text]=useTypewriter({
  words:["Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time"],
  Loop:0,
  typeSpeed:20,
  deleteSpeed:10,
  delaySpeed:2000,
});
const authToken=localStorage.getItem('jwt');
  const checkAuth=async(req,res)=>{
    const savedUserResponse=await fetch(
      `${import.meta.env.VITE_API_SERVER_BASE_URL}/gmoat`,{
        method:"GET",
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      }
     ).then(res=>{
       console.log(res);
       if(res.status!=200){
            // location.assign('/gmoat');
            location.assign('/login');
       }
     })
     .catch(err=>{
       console.log("Error is:",err);
     })
  }
  return (
    
    <div className='mt-[0px] mb-[90vh]' >
        {/* <div className='absolute z-[-4] bg-black bg-blend-multiply bottom-0 '> */}
          {isAboveSmallScreens?<div className='absolute z-[-4] bg-black bg-blend-multiply bottom-0 top-0 '> <img src={Banner} className='opacity-20 w-[full]'/> </div>:
          <div className='absolute z-[-4] bg-black bg-blend-multiply '>
          <img src={Banner1}  className=' opacity-20 w-[full] h-[102vh]'/>
          </div>
          }
     
      {/* </div>     */}
      {isAboveSmallScreens?
      <div className='text-[4rem] font-bebasNeue absolute right-[4vw] top-[45vh] bg-blend-multiply '>
        <h1 className='text-yellow-300 bg-blend-multiply'>Welcome to the Wrestling World</h1>
        <h2 className="text-4xl font-bold text-white" ><span>{text}</span>
            <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            </h2>
      </div>:<div className='text-[2rem] font-bebasNeue absolute top-[30vh] '>
        <h1 className='text-yellow-300 ml-[5vw] '>Welcome to the Wrestling World</h1>
        <h2 className="text-xl font-bold text-white justify-center mx-auto " ><span className='ml-[5vw]'>{text}</span>
            <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            </h2>

            <div className='  bg-black font-bebasNeue text-[1rem]' >
      <div className='flex pt-[100px]  text-white md:gap-x-[80px] justify-center xs:gap-x-[10px] ml-[10px] mr-[10px]'>
      <NavLink to='/superstar'>
       <div className=' hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={superStarTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
       <span className='flex justify-center items-center'>SUPERSTARS</span>
       </div>
       </NavLink>
       <NavLink to='/rivalries'>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={rivalriesTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px] '/>
        <span className=' flex justify-center items-center'>Rivalries</span></div>
        </NavLink>
       <NavLink to='/' onClick={checkAuth}>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={gmoatTile} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
        {isAboveSmallScreens?<span className='flex justify-center items-center '> Greatest matches of all time</span>:<span className='flex justify-center items-center '> Greatest matches of all time</span>}
        </div>
       </NavLink>
     
      </div>
      <div className='text-white mt-[50px] pt-[7px] relative'>
        <span className=' absolute text-5xl left-[50%] -translate-x-[50%] '>Shows</span>
        <button><img src={aewbanner} className='mt-[18px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 mt-[8vh] hover:scale-110'/>  </button>
        <NavLink to={'/shows/0'}> <img src={wwebanner} className='mt-[0px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></NavLink>
        <NavLink to={'/shows/2'}> <img src={nxtbanner} className='md:ml-[155px] xs:ml-[0px]hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></NavLink>
        <button> <img src={aewbanner2} className='md:ml-[400px] xs:ml-[0px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '/></button>
        <NavLink to={'/shows/1'}>  <img src={smackdownbanner} className='hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></NavLink>
      </div>
    </div>
      </div>
}
    </div>
  )
}

export default Hero
