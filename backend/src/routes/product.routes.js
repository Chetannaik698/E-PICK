import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
} from "../controller/product.controller.js";
import { adminOnly, protect } from "../middleware/user.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

//product routes
router.post("/", adminOnly, upload.array("images", 5), addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", adminOnly, deleteProductById);


export default router;
