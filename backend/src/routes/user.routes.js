import express from "express";
import {
  getMe,
  loginAdmin,
  loginUser,
  logoutAdmin,
  logoutUser,
  registerUser,
} from "../controller/user.controller.js";
import { adminOnly, protect } from "../middleware/user.middleware.js";

const router = express.Router();

//user routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.post("/logout", protect, logoutUser);

//admin routes
router.post("/admin/login", loginAdmin);
router.post("/admin/logout", logoutAdmin);

export default router;
