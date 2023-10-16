import  express  from "express";
import getSuperStar from "../controllers/SuperStar.js";
const router=express.Router();
router.get('/:sname',getSuperStar);
export default router;

