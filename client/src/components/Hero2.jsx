import React from 'react'
import superStarTile from '../assets/Superstar_tile3.png';
import gmoatTile from '../assets/gmoat_tile3.jpg';
import wwebanner from '../assets/WWE_BANNER.jpg'
import smackdownbanner from '../assets/SMACK_DOWN_BANNER.jpg'
import nxtbanner from '../assets/NXT_BANNER2.jpeg'
import rivalriesTile from '../assets/rivalries_tile2.jpg';
import aewbanner from '../assets/aewam.png';
import aewbanner2 from '../assets/aewbanner.png';
import { NavLink,useLocation } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
const Hero2 = () => {
  // const location=useLocation();
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
  const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
  return (
    <div className='  bg-black font-bebasNeue' >
      <div className='flex pt-[100px]  text-white md:gap-x-[80px] justify-center xs:gap-x-[10px] ml-[10px] mr-[10px]'>
      <NavLink to='/superstar'>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={superStarTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
       <span className='flex justify-center items-center'>SUPERSTARS</span></div>
       </NavLink>
       <NavLink to='/rivalries'>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={rivalriesTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px] '/>
        <span className='flex justify-center items-center'>Rivalries</span></div>
        </NavLink>
       <NavLink to='/' onClick={checkAuth}>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={gmoatTile} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
        {isAboveSmallScreens?<span className=' text-center md:ml-[20px] xs:ml-[10px] '> Greatest matches of all time</span>:<span className='md:ml-[20px] xs:ml-[10px] '> Greatest matches of <span className='xs:ml-[38px]'>all time</span></span>}
        </div>
       </NavLink>
     
      </div>
      <div className='text-white mt-[150px] pt-[7px]'>
        <span className='text-5xl ml-[46vw] md:mt-[2px] ]'>Shows</span>
        <button><img src={aewbanner} className='mt-[18px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/>  </button>
        <NavLink to={'/shows/0'}> <img src={wwebanner} className='mt-[0px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></NavLink>
        <NavLink to={'/shows/2'}> <img src={nxtbanner} className='md:ml-[155px] xs:ml-[0px]hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></NavLink>
        <button> <img src={aewbanner2} className='md:ml-[400px] xs:ml-[0px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '/></button>
        <NavLink to={'/shows/1'}>  <img src={smackdownbanner} className='hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></NavLink>
      </div>
    </div>
  )
}

export default Hero2;
