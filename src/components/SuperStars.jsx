import React from 'react'
import superstarbanner from '../assets/UNIVERSAL_CHAMPIONSHIP_BANNER.jpg'
const SuperStars = () => {
  return (
    <div className=' h-[1000px] font-bebasNeue bg-black text-white'>
      <img src={superstarbanner} className='absoloute z-[-4] opacity-[0.8]'/>
      <h1 className='text-8xl absolute top-[320px] right-[200px] text-yellow-200'>SUPERSTARS</h1>
      <div className='ml-[700px] mt-[40px] text-3xl mr-[695px]'>WWE ROSTER</div>
    </div>
  )
}

export default SuperStars
