import express from 'express';
import { loginUser, registerUser } from '../controller/user.controller.js';

const router = express.Router();

//user routes
router.post("/register", registerUser)
router.post("/login", loginUser)

export default router;