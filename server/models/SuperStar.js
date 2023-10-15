import mongoose from "mongoose";

const starSchema=mongoose.Schema({
    name:{type:String},
    picturePath:{type:Array},
    description:{type:String},
    height:{type:String},
    weight:{type:String},
    rank:{type:Number}

})
const Star=mongoose.model("Star",starSchema);
export default Star;