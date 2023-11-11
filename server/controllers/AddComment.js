import Comment from "../models/Comment.js";
const AddComment=async(req,res)=>{
    try{
      const {name,description,supname}=req.body;
      console.log(name);
      console.log(description);
      console.log(supname);
      const findStar=await Comment.findOne({name:supname});
      if(findStar){
        const updatedArray=findStar.description;
        updatedArray.push({name,description});
        await Comment.updateOne({name:supname},{description:updatedArray});
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