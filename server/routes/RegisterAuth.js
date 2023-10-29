import express from "express";
const router=express.Router();
import { register } from "../controllers/Auth.js";
import { login } from "../controllers/Auth.js";
router.post("/register",register);
router.post("/login",login);
export default router;
