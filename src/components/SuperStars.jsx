import React from 'react'
import superstarbanner from '../assets/UNIVERSAL_CHAMPIONSHIP_BANNER.jpg'
import superStarTile from '../assets/SuperStar_tile3.png';
const SuperStars = () => {
  return (
    <div className=' font-bebasNeue bg-black text-white'>
      <img src={superstarbanner} className='absoloute z-[-4] opacity-[0.8]'/>
      <h1 className='text-8xl absolute top-[320px] right-[200px] text-yellow-200'>SUPERSTARS</h1>
      <div className='ml-[700px] mt-[40px] text-3xl mr-[695px]'>WWE ROSTER</div>
      <div className='p-[10px] mr-[1300px] ml-[30px] bg-white text-black hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={superStarTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
       <span className='md:ml-[58px] xs:ml-[35px]'>AJ STYLES</span>
       </div>
      <div className='p-[10px] mr-[1300px] ml-[30px] bg-white text-black hover:bg-yellow-300 hover:text-black transition duration-0 hover:duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
        <img src={superStarTile} className=' h-[300px] w-[200px] rounded-[8px] xs:h-[200px] w-[200px]'/>
       <span className='md:ml-[58px] xs:ml-[35px]'>AJ STYLES</span>
       </div>
      
    </div>
  )
}

export default SuperStars
