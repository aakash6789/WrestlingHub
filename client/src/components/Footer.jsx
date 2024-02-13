import React from 'react'
import footerlogo from '../assets/wwe_footer.svg'
import footerlogo1 from '../assets/njpw2.webp'
import footerlogo2 from '../assets/njpw1.png'
const Footer = () => {
  return (
    <div className='bg-[#1d1d1d]   text-white font-bebasNeue xs:text-[0.8rem] md:text-[1rem]'>
      <div className='flex relative'>
      <img src={footerlogo} className='md:pt-[55px] md:pb-[70px] md:pl-[30px] md:ml-[10px] xs:pl-[20px]  xs:mt-[30px]  '/>
      <img src={footerlogo1} className='w-[60px] h-[60px] md:ml-[50px] md:mt-[80px] xs:ml-[30px] xs:mt-[34px]'/>
      <div className='cont-1 md:ml-[900px] md:mt-[70px] xs:ml-[180px] xs:mt-[35px] absolute right-[7vw] '>
       <div className='hover:cursor-pointer'>Contact us</div>
       <div className='hover:cursor-pointer'>About</div>
       <div className='hover:cursor-pointer'>Patreon</div>
      </div>
      <div className='cont-2 md:ml-[140px] md:mt-[70px] xs:ml-[30px] xs:mt-[35px] absolute right-[18vw]'>
       <div className='hover:cursor-pointer'>Terms and Conditions</div>
       <div className='hover:cursor-pointer'>Privacy Policy</div>
       <div className='hover:cursor-pointer'>Cookie Policy</div>
      {/* <div className=' xs:bg-[#1d1d1d] absolute xs:mt-[95px] xs:ml-[0px] md:mt-[175px] md:ml-[500px] xs:h-[20px] xs:w-[518px] xs:pl-[143px]'><span>&#169;</span>COPYRIGHT 2023||ACPRODUCTIONS-ALL RIGHTS RESERVED</div> */}
      </div>
      </div>
      <div className=' text-center xs:mt-[30px]'><span>&#169;</span>COPYRIGHT 2023||ACPRODUCTIONS-ALL RIGHTS RESERVED</div>
    </div>
  )
}

export default Footer;
