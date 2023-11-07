import { comment } from 'postcss';
import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Comments = () => {
    // const {user,setUser,uname,setUname}=useAuth();
    const [comments,setComments]=useState(['Very good','Very good2','Very good3','Very good4']);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const { reset } = useForm();
      const onError=()=>{
        console.log("Error posting comment");
        
      }
            const onSubmit=(data)=>{
              //  console.log(formData);
               
            }
  return (
    <div className='text-center ml-[700px]'>
        {comments.map((comment,index)=>{
           return(
            <div key={index} className='flex'>
             <p>Comment{index} </p>
             <p>{comment}</p>
            </div>
           )
        })}
        <form action=''>

        </form>
        
    </div>

  )
}

export default Comments;
