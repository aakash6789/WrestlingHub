// import react from react;
import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { wwestars } from '../data/allstars';

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

   
  return (
    <div className='bg-white text-black h-[800px]'>
      <h1>{data.name}</h1>
      <br></br>
      <h1>{data.description}</h1>
      {/* <p>{data.rank}</p> */}
      <p>{data.height}</p>
      {/* <p>{data.picturePath[0]}</p> */}
      {data.picturePath.map((element,index)=>{
        return(
      <img src={'../assets/'+element} key={index}></img>
        )

      })}
      
    </div>
  )
}

export default StarProfile;
//Images fetched properly for carousel