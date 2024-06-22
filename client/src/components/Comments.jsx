import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router-dom";

const   Comments = React.memo(() => {
  const { user, setUser, uname, setUname, comment, setComments } = useAuth();
  // const [comments,setComments]=useState(['Very good','Very good2','Very good3','Very good4']);
  const { sname } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
 
  const formData = {
    name: "",
    description: [""],
    supname:sname
  };
  const onError = () => {
    console.log("Error posting comment");
  };
  useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch(
          `${import.meta.env.VITE_API_SERVER_BASE_URL}/comment/${sname}`,
          { method: "GET" }
        );
        if (!response) {
          throw new Error("Network response was not ok");
        } else {
          const data = await response.json();
        //   console.log(data.findStar.description);
        //   console.log(typeof(data.findStar.description));
        // console.log(data.findStar.description);
        setComments( 
          data.findStar.description,
        );
        }
        // console.log("GET comm", comment);
      } catch (err) {
        console.log("Error is:", err);
      }
    };
    fetchData();
  }, []);
  // useEffect(()=>{

  // },[])

  const callfun = async (req, res) => {
    const formDataJson = JSON.stringify(formData);
    const savedUserResponse = await fetch(`${import.meta.env.VITE_API_SERVER_BASE_URL}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJson,
    })
      .then(async (res) => {
        if (res.status == 200) {
          const data = await res.json();
        //   console.log(data);
          // console.log("Another Comment added sucessfully ");
        //   console.log(uname);
        //  console.log( typeof(data.findStar.description));
          setComments( 
            data.findStar.description,
          );
          console.log(comment);
          // setArr(comment.description);
        }
      })
      .catch((err) => {
        console.log("Error is:", err);
      });
  };

  const onSubmit = (data, e) => {
    e.preventDefault(); // Prevent default form submission behavior
    formData.name = uname;
    formData.description = data.comment;
    // console.log(formData);
    reset();
    callfun();
  };
  return (
    <div className=" w-[98%] flex font-mono">
      <div>
                 {
 comment && Array.isArray(comment) ? (
    comment.map((comm, ind) => (
      <div className='flex ml-[5%] py-4  xs:pl-[10px]' key={comm+ind}>
        <div className="font-bold">{comm.name}:</div>
        <div className="md:w-[550px] xs:w-[200px] px-2">{comm.description}</div>
      </div>
    ))
  ) : (
    <p className="ml-[720px] mr-[630px]">No discussions yet</p>
  )
}
</div>
      <div className=" w-1/4  flex-col ml-[5%] mr-0 ">
      <h4 className="mt-[50px] ml-[22%]">Start discussion</h4>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            id="comment"
            className="md:w-[300px] md:h-[100px] xs:w-[200px] xs:h-[80px] xs:mr-[540px] border-black px-2"
            name="comment"
            type="text"
            {...register("comment", {
              required: "true",
            })} 
            defaultValue=""
          />
          <button type="submit" className="bg-black text-white md:ml-[125px] p-2 xs:ml-[70px]">
            Post
          </button>
        </form>
      </div>
    </div>
  );
});

export default Comments;
//Comments nesting required
//Reddit nesting appropiate 
