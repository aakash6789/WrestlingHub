import React from 'react'
import Banner from '../assets/wrestlemania2.jpg'
import Banner1 from '../assets/wrestlemania.jpg'
import useMediaQuery from '../hooks/useMediaQuery'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
const Hero = () => {
const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
const [text]=useTypewriter({
  words:["Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time","Everything about your favorite Superstars","Unheard stories about Superstars","Wrestling across all promotions","Best matches of all time"],
  Loop:0,
  typeSpeed:20,
  deleteSpeed:10,
  delaySpeed:2000,
});
  return (
    
    <div className='mt-[0px]' >
        <div className='absolute z-[-4] bg-black bg-blend-multiply'>
          {isAboveSmallScreens? <img src={Banner} style={{backgroundSize:'200px 200px'}} className=' opacity-20 bg-blend-multiply'/>:
          <img src={Banner1} style={{backgroundSize:'200px 200px'}} className=' opacity-20 bg-blend-multiply'/>
          }
     
      </div>    
      {isAboveSmallScreens?
      <div className='text-7xl font-bebasNeue absolute right-[40px] top-[350px] bg-blend-multiply'>
        <h1 className='text-yellow-300 bg-blend-multiply'>Welcome to the Wrestling World</h1>
        <h2 className="text-4xl font-bold text-white" ><span>{text}</span>
            <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            </h2>
      </div>:<div className='text-4xl font-bebasNeue absolute right-[70px] top-[200px]'>
        <h1 className='text-yellow-300 '>Welcome to the Wrestling World</h1>
        <h2 className="text-xl font-bold text-white justify-center mx-auto" ><span>{text}</span>
            <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            </h2>
      </div>
}
    </div>
  )
}

export default Hero
