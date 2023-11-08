import Comment from "../models/Comment.js";
const getComments=async(req,res)=>{
    try{
        const {sname}=req.params;
        const findStar=await Comment.findOne({name:sname});
        if(findStar){
          console.log("Comments sent successfully");
          res.status(200).json({findStar});
        }
      }
      catch(err){
          res.status(404).json({message:err.message});
      }
}
export default getComments;