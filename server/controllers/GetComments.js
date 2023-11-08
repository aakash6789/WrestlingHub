import Comment from "../models/Comment.js";
const getComments=async(req,res)=>{
    try{
        const {sname}=req.params;
        const findStar=await Comment.findOne({name:sname});
        if(findStar){
          console.log("Comments sent successfully");
          console.log(findStar);
          res.status(200).json({findStar});
        }else{
            console.log("Comment couldn't be sent");
        }
      }
      catch(err){
          res.status(404).json({message:err.message});
      }
}
export default getComments;