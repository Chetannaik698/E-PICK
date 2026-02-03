import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getBestsellerProducts,
  getProductById,
} from "../controller/product.controller.js";
import { adminOnly, protect } from "../middleware/user.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

//product routes
router.post("/", protect, adminOnly, upload.array("images", 5), createProduct);
router.get("/", getAllProducts);
router.get("/bestsellers", getBestsellerProducts);
router.get("/:id", getProductById);
router.delete("/:id", protect, adminOnly, deleteProductById);

// router.put("/:id", (req, res) => {
//     res.send("Update Product by ID");
// });

export default router;
