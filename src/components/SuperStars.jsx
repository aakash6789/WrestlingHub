import React from 'react'
import superstarbanner from '../assets/UNIVERSAL_CHAMPIONSHIP_BANNER.jpg'
import superStarTile from '../assets/stonecoldtile.jpg';
import wwestars from '../data/wwestars';
import reignsbanner from '../assets/rheabanner.jpg'
const SuperStars = () => {
  return (
    <div className=' h-[4000px] font-bebasNeue bg-black text-white'>
      <img src={superstarbanner} className='absoloute z-[-4] opacity-[0.8]'/>
      <h1 className='md:text-8xl absolute md:top-[300px] md:left-[1000px] text-yellow-200  xs:text-5xl xs:top-[150px] xs:left-[150px]'>SUPERSTARS</h1>
      <div className='ml-[700px] mt-[40px] text-3xl mr-[695px]'>WWE ROSTER</div>
      <div className='grid grid-rows-3 grid-cols-3 gap-8 md:ml-[180px] md:mt-[70px]'>
      {wwestars.map((wwestar,index)=>{
        return (
         <div key={index} className='md:p-[10px] md:mr-[215px] md:ml-[30px] xs:p-[6px] xs:mr-[2px]  bg-white text-black hover:bg-white hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
         <img src={wwestar.imgLink} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
        <span className=' md:ml-[45px] xs:ml-[35px] mx-auto'>&nbsp;{wwestar.name}</span>
        </div>
      )
      })}
     </div>
       <img src={reignsbanner} className=' md:w-[1530px]md: mt-[120px] filter grayscale opacity-[1]'/>
       <div className='ml-[750px] mt-[40px] text-3xl '>AEW &nbsp;ROSTER</div>
    </div>
  )
}

export default SuperStars
