import Comment from "../models/Comment.js";
const AddComment=async(req,res)=>{
    try{
      const {name,description}=req.body;
      console.log(name);
      console.log(description);
      const findStar=await Comment.findOne({name});
      if(findStar){
        const updatedArray=findStar.description;
        updatedArray.push(description)
        await Comment.updateOne({name:name},{description:updatedArray});
        console.log("Comments added successfully");
        res.status(200).json({findStar});
      }else{
        console.log('Star not found');
      }
    }
    catch(err){
        res.status(404).json({message:err.message});
    }


}
export default AddComment;