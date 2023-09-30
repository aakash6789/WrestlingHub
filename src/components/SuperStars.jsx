import React from 'react'
import superstarbanner from '../assets/UNIVERSAL_CHAMPIONSHIP_BANNER.jpg'
import superStarTile from '../assets/stonecoldtile.jpg';
import {wwestars,aewstars} from '../data/allstars';
import rheabanner from '../assets/rheabanner.jpg'
const SuperStars = () => {
  return (
    <div className='  font-bebasNeue bg-black text-white'>
      <img src={superstarbanner} className='absoloute z-[-4] opacity-[0.8]'/>
      <h1 className='md:text-8xl absolute md:top-[300px] md:left-[1000px] text-yellow-200  xs:text-5xl xs:top-[150px] xs:left-[150px]'>SUPERSTARS</h1>
      <div className='md:ml-[700px] md:mt-[40px] md:text-3xl md:mr-[695px] xs:ml-[214px] xs:mt-[34px] xs:mb-[34px] xs:text-2xl xs:mr-[177px]'>WWE ROSTER</div>
      <div className='grid grid-rows-3 grid-cols-3 gap-8 md:ml-[180px] md:mt-[70px]'>
      {wwestars.map((wwestar,index)=>{
        return (
         <div key={index} className=' text-center md:p-[10px] md:mr-[215px] md:ml-[30px] xs:p-[6px] xs:mr-[2px]  bg-white text-black hover:bg-white hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
         <img src={wwestar.imgLink} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
        {/* <span className=' md:ml-[45px] xs:ml-[35px] mx-auto'>&nbsp;{wwestar.name}</span> */}
        <span className=''>&nbsp;{wwestar.name}</span>
        </div>
      )
      })} 
     </div>
       <img src={rheabanner} className=' md:w-[1530px]md: mt-[120px] filter grayscale opacity-[1]'/>
       <div className='md:ml-[700px] md:mt-[40px] md:text-3xl xs:ml-[214px] xs:mt-[30px] xs:text-2xl xs:mr-[177px] xs:mb-[30px]'>AEW &nbsp;ROSTER</div>
       <div className='grid grid-rows-3 grid-cols-3 gap-8 md:ml-[180px] md:mt-[70px]'>
      {aewstars.map((aewstar,index)=>{
        return (
         <div key={index} className=' text-center md:p-[10px] md:mr-[215px] md:ml-[30px] xs:p-[6px] xs:mr-[2px]  bg-white text-black hover:bg-white hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
         <img src={aewstar.imgLink} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
        {/* <span className=' md:ml-[45px] xs:ml-[35px] mx-auto'>&nbsp;{wwestar.name}</span> */}
        <span className=''>&nbsp;{aewstar.name}</span>
        </div>
      )
      })}
     </div>
     <div></div>
    </div>
    
  )
}
export default SuperStars;
