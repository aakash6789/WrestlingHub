import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { user, setUser, uname, setUname, comment, setComments } = useAuth();
  // const [comments,setComments]=useState(['Very good','Very good2','Very good3','Very good4']);
  const { sname } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { reset } = useForm();
  const formData = {
    name: "",
    description: [""],
  };
  const onError = () => {
    console.log("Error posting comment");
  };
const [arr,setArr]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
        //   console.log("hh");
        const response = await fetch(
          `http://localhost:3000/comment/${sname}`,
          { method: "GET" }
        );
        if (!response) {
          throw new Error("Network response was not ok");
        } else {
          const data = await response.json();
        //   console.log(data);
          setComments((prevData) => ({
            ...prevData,
            name: uname,
            description: data.findStar.description,
          }));
        }
        setArr(comment.description);
        console.log("GET comm", comment);
      } catch (err) {
        console.log("Error is:", err);
      }
    };
    fetchData();
  }, []);

  const callfun = async (req, res) => {
    const formDataJson = JSON.stringify(formData);
    const savedUserResponse = await fetch("http://localhost:3000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: formDataJson,
    })
      .then(async (res) => {
        if (res.status == 200) {
          const data = await res.json();
        //   console.log(data);
          console.log("Another Comment added sucessfully ");
        //   console.log(uname);
        //   console.log(data.findStar.description);
          setComments((prevData) => ({
            ...prevData, 
            name: uname,
            description: data.findStar.description,
          }));
          console.log(comment);
          setArr(comment.description);
        }
      })
      .catch((err) => {
        console.log("Error is:", err);
      });
  };

  const onSubmit = (data, e) => {
    e.preventDefault(); // Prevent default form submission behavior
    formData.name = sname;
    formData.description = data.comment;
    // console.log(formData);
    callfun();
  };
  return (
    <div className="ml-[700px]">
              
              {
 comment && Array.isArray(comment) ? (
    comment.map((comm, ind) => (
      <div className='flex' key={ind}>
        <div>Comment {comm.name}</div>
        <div>{comm.description}</div>
      </div>
    ))
  ) : (
    <p>No comments available</p>
  )
}
      <h4 className="mt-[50px] ml-[100px]">Start discussion</h4>
      <div className="text-center mr-[500px] flex-col">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            id="comment"
            className="md:w-[300px] md:h-[100px] border-black"
            name="comment"
            type="text"
            {...register("comment", {
              required: "true",
            })}
          />
          <button type="submit" className="bg-black text-white mb-[40px] p-2">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
