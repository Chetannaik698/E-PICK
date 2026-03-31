import express from "express";
import { addToCart, deleteCartItem, getCart, updateCartItems } from "../controller/cart.controller.js";
import { protect } from "../middleware/user.middleware.js";

const router = express.Router();

//cart routes
router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.put("/:itemId", protect, updateCartItems);
router.delete("/:itemId", protect, deleteCartItem);

export default router;
