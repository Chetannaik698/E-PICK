import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";
import { protect } from "../middleware/user.middleware.js";

const router = express.Router();

//user routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
