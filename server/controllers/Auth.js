import User from "../models/User.js";
import bcrypt from "bcrypt";
const register=async(req,res)=>{
    const saltRounds=10;
    try{
    // const parsedData=JSON.parse(req.body);
  const {email,firstName,lastName,password,phoneNo}=req.body;
  const findUser=await User.findOne({email});
  if(findUser){
    res.status(409).send("User already exists");
    console.log("User already exists");
  }else{
  const encPassword=await bcrypt.hash(password,10);
  const newUser=await User.create({
    email,
    firstName,
    lastName,
    password:encPassword,
    phoneNo
  }) .then(() => {
    res.status(201).send("User added successfully");
    console.log("User added successfully");
  })
  .catch((err) => {
    console.log("Error is: " + err);
  });
}
}
catch(err){
    res.status(404).json({message:err.message});
}
}
const login={

}
export {register,login};