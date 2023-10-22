import mongoose from "mongoose";

const starSchema=mongoose.Schema({
    name:{type:String},
    picturePath:{type:Array},
    description:{
        earlyLife:{type:String},
        carrer:{type:String},
        family:{type:String}
        
    },
    rank:{type:Number},
    videoId:{type:String}

})
const Star=mongoose.model("Star",starSchema);
export default Star;