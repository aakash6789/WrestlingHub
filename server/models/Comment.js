import mongoose from "mongoose";

const commentSchema=mongoose.Schema({
    name:{type:String,unique:'true'},
    description:{type:Array}
})
const Comment=mongoose.model('Comment',commentSchema);
export default Comment;
