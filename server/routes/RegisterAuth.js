import express from "express";
const router=express.Router();
import { register } from "../controllers/Auth.js";
router.post("/register");
export default router;
