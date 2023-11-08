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
    <div className='ml-[700px]'>
        {comments.map((comment,index)=>{
           return(
            <div key={index} className='flex'>
             <p>Comment{index} </p>
             <p>{comment}</p>
            </div>
           )
        })}
        <h4 className='mt-[50px] ml-[100px]'>Start discussion</h4>
        <div className='text-center mr-[500px] flex-col'>
        <form action=''>
            <input id='comment' className='md:w-[300px] md:h-[100px] border-black' name='comment' type='text' {...register('comment',{
                required:'true'
            })}/>
            <button type='submit' className='bg-black text-white mb-[40px] p-2'>Post</button>

        </form>
        </div>
    </div>

  )
}

export default Comments;
