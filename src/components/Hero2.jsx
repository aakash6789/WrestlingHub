import React from 'react'
import superStarTile from '../assets/SuperStar_tile3.png';
import gmoatTile from '../assets/gmoat_tile3.jpg';
import wwebanner from '../assets/WWE_BANNER.jpg'
import smackdownbanner from '../assets/SMACK_DOWN_BANNER.jpg'
import nxtbanner from '../assets/NXT_BANNER2.jpeg'
import rivalriesTile from '../assets/rivalries_tile2.jpg';
import aewbanner from '../assets/aewam.png';
import aewbanner2 from '../assets/aewbanner.png';
import { NavLink } from 'react-router-dom';
const Hero2 = () => {
  return (
    <div className='md:mt-[791px] xs:mt-[339px] bg-black font-bebasNeue' >
      <div className='flex pt-[100px]  text-white md:gap-x-[80px] justify-center xs:gap-x-[10px] ml-[10px] mr-[10px]'>
      <NavLink to='/superstars'>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={superStarTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
       <span className='md:ml-[0px] xs:ml-[8px]'>SUPERSTARS</span></div>
       </NavLink>
       <button>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={gmoatTile} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
       <span className='md:ml-[0px] xs:ml-[0px] '> Greatest matches of all time</span></div>
       </button>
       <button>
       <div className='p-[10px] hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={rivalriesTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px] '/>
        <span className='md:ml-[0px] ml-[120px] xs:ml-[0px]'>Rivalries</span></div>
        </button>
      </div>
      <div className='text-white mt-[150px] pt-[7px]'>
        <span className='text-5xl md:ml-[700px] md:mt-[2px] xs:ml-[200px]'>Shows</span>
        <button><img src={aewbanner} className='mt-[18px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/>  </button>
        <button> <img src={wwebanner} className='mt-[0px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></button>
        <button> <img src={nxtbanner} className='md:ml-[155px] xs:ml-[0px]hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></button>
        <button> <img src={aewbanner2} className='md:ml-[400px] xs:ml-[0px] hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '/></button>
        <button>  <img src={smackdownbanner} className='hover:transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'/></button>
      </div>
    </div>
  )
}

export default Hero2;
