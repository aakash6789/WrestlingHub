import React from 'react'
import superstarbanner from '../assets/UNIVERSAL_CHAMPIONSHIP_BANNER.jpg'
import superStarTile from '../assets/stonecoldtile.jpg';
import wwestars from '../data/wwestars';
import reignsbanner from '../assets/rheabanner.jpg'
const SuperStars = () => {
  return (
    <div className=' h-[4000px] font-bebasNeue bg-black text-white'>
      <img src={superstarbanner} className='absoloute z-[-4] opacity-[0.8]'/>
      <h1 className='text-8xl absolute top-[320px] right-[200px] text-yellow-200'>SUPERSTARS</h1>
      <div className='ml-[700px] mt-[40px] text-3xl mr-[695px]'>WWE ROSTER</div>
      <div className='grid grid-rows-3 grid-cols-3 gap-8 ml-[180px]  mt-[70px]'>
      {wwestars.map((wwestar,index)=>{
        return (
         <div key={index} className='p-[10px] mr-[215px] ml-[30px]  bg-white text-black hover:bg-white hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
         <img src={wwestar.imgLink} className='h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
        <span className=' md:ml-[45px] xs:ml-[35px] mx-auto'>&nbsp;{wwestar.name}</span>
        </div>
      )
      })}
     </div>
       <img src={reignsbanner} className=' w-[1530px] mt-[120px] filter grayscale opacity-[1]'/>
       <div className='ml-[700px] mt-[40px] text-3xl mr-[695px]'>AEW &nbsp;ROSTER</div>
    </div>
  )
}

export default SuperStars
