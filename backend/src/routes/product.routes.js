import express from "express";
import { createProduct, getAllProducts } from "../controller/product.controller.js";
import { adminOnly, protect } from "../middleware/user.middleware.js";

const router = express.Router();

//product routes
router.post("/", protect, adminOnly, createProduct)

router.get("/", getAllProducts);

router.get("/:id", (req, res) => {
    res.send("Get Product by ID"); 
})

router.put("/:id", (req, res) => {
    res.send("Update Product by ID");
});

router.delete("/:id", (req, res) => {
    res.send("Delete Product by ID");
})

export default router;