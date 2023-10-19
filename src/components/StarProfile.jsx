// import react from react;
import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { wwestars } from '../../server/data';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';

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
    <div className=' text-black bg-white font-robotoSlab'>
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
      
       <h1 className='ml-[630px] text-6xl font-bebasNeue mt-[30px] mr-[600px] pl-[2px] flex justify-center'>{data.name}</h1>
      <br></br>
     <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='px-4' />
      {/* <p>{data.rank}</p> */}
      <p>{data.height}</p>
      
    </div>
  )
}

export default StarProfile;
//Images fetched properly for carousel