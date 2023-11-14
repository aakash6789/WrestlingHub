import  express  from "express";
import AddComment from "../controllers/AddComment.js";
import GetComments from "../controllers/GetComments.js";
const router=express.Router();
router.post('/',AddComment);
router.get('/:sname',getComments);
export default router;
