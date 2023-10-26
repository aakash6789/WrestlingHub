import React from 'react'
import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
const Rivalries = () => {
  const [currindex,setCurrIndex]=useState(0);
  const prevInd=()=>{
     if(currindex==0){
      setCurrIndex(3);
     }else{
       setCurrIndex(currindex-1);
     }
  }
  const rival=['srr10.jpg','srr11.jpg','srr12.jpg','srr13.jpg'];
  const nextInd=()=>{
     if(currindex==3){
      setCurrIndex(0);
     }else{
       setCurrIndex(currindex+1);
     }
  }
  return (
    <div className=' text-black font-robotoSlab bg-[white]'>
    <div className='bg-black'>
    <div className='bg-black max-w-[1400px] h-[700px] w-full m-auto py-2 px-4 relative group'>
    <div className=' w-full h-full rounded-2xl duration-500 relative flex justify-center'>
    <img src={'../assets/'+rival[currindex]} className='max-h-[700px]'> 
    </img>
    </div>
    <div>
  <BsChevronCompactLeft size={50} onClick={prevInd} className=' hidden group-hover:block absoloute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute' />
    </div>
    <div>
      <BsChevronCompactRight size={50} onClick={nextInd} className=' hidden group-hover:block absoloute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer absolute'/>
    </div>
    </div>
    </div>  
     <h1 className='text-center md:ml-[360px] md:text-6xl font-bebasNeue md:mt-[30px] md:mr-[300px] md:pl-[2px] md:flex md:justify-center xs:ml-[200px] xs:mt-[40px] xs:text-2xl'>Reigns <span className='text-3xl mt-[20px] px-2'>vs</span> Ambrose  <span className='text-3xl mt-[20px] px-2'>vs</span> Rollins</h1>
    
     <div className='md:px-16 xs:px-8 mt-[40px]'>
      <p>Turn the clock back to the time, when we the best thing about the week was to get off the school bus on tuesdays and rush back to home to watch raw on time.</p>
     </div>
    
    <br></br>

   
   <br></br>
  </div>
  )
}

export default Rivalries
