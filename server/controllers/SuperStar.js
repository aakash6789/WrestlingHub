import Star from "../models/SuperStar"
const getSuperStar=async(req,res)=>{
    try{
        const {sname}=req.params;
      const SuperStar=await Post.find({name:sname});
      console.log(SuperStar);
      res.status(200).json(SuperStar);
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
}
export default getSuperStar;