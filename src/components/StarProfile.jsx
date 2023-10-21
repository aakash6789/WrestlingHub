// import react from react;
import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { wwestars } from '../../server/data';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

const StarProfile = () => {
    const {sname}=useParams();
    const [data, setData] = useState({
        name: '',
        picturePath: [],
        description: '',
        height: '',
        weight: '',
        rank: 0
      });
    useEffect(()=>{
        const fetchData=async(sname)=>{
            try{
              const response=await fetch(`http://localhost:3000/superstar/${sname}`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const jsonData = await response.json();
            //   console.log(jsonData[0].name);
              setData(prevData => ({
                ...prevData,
                name: jsonData[0].name,
                picturePath: jsonData[0].picturePath,
                description: jsonData[0].description,
                height: jsonData[0].height,
                weight: jsonData[0].weight,
                rank: jsonData[0].rank
              }));
            //   console.log(data);
              console.log(data.name);
            //   console.log(data);
            }
            catch(err){
              console.log("Error fetching data ",err);
            }
         }
        fetchData(sname);
    },[])
   const [currindex,setCurrIndex]=useState(0);
   const prevInd=()=>{
      if(currindex==0){
       setCurrIndex(3);
      }else{
        setCurrIndex(currindex-1);
      }
   }
   const nextInd=()=>{
      if(currindex==3){
       setCurrIndex(0);
      }else{
        setCurrIndex(currindex+1);
      }
   }
   const htmlContent=data.description;
   
  return (
    <div className=' text-black font-robotoSlab bg-[white]'>
      <div className='bg-black'>
      <div className='bg-black max-w-[1400px] h-[700px] w-full m-auto py-2 px-4 relative group'>
      <div className=' w-full h-full rounded-2xl duration-500 relative flex justify-center'>
      <img src={'../assets/'+data.picturePath[currindex]} className='max-h-[700px]'> 
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
      <div className='flex'>
       <h1 className='md:ml-[630px] md:text-6xl font-bebasNeue md:mt-[30px] md:mr-[300px] md:pl-[2px] md:flex md:justify-center xs:ml-[200px] xs:mt-[40px] xs:text-2xl'>{data.name}</h1>
       <div className='flex md:mt-[50px] font-bebasNeue md:text-1xl xs:ml-[100px] xs:mt-[45px]'>
       <span>Ranking:</span><p className='ml-[5px]' >{data.rank}</p>
       </div>
       </div>
      <br></br>
     <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='md:px-16 xs:px-8' />
     <br></br>
      {/* <p>{data.rank}</p> */}
      {/* <div className='font-bebasNeue px-16 pb-10'>
      <h1 className='text-6xl '>BIO</h1>
      <div className='flex pb-2'>
      <span>Height:</span><p className='' >{data.height}</p>
      </div>
      <div className='flex pb-2'>
      <span>Weight:</span><p className='' >{data.weight}</p>
      </div>
      <div className='flex pb-2'>
      <span>Ranking:</span><p className='' >{data.rank}</p>
      </div>
     
      </div> */}
      <Container>
      <div className="ratio ratio-16x9">
      <iframe width="873" height="491" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="Dean Ambrose vs. Seth Rollins - WWE Championship Match: Raw, July 18, 2016"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      </Container>
     
      
    </div>
  )
}

export default StarProfile;
//Images fetched properly for carousel