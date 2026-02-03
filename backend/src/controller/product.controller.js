import cloudinary from "../config/cloudinary.js";
import productModel from "../models/product.model.js";
import fs from "fs";

//create product
export const createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    stock,
    subCategory,
    sizes,
    bestSeller,
  } = req.body;

  try {
    const imageUrls = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "uploads",
        });

        imageUrls.push(result.secure_url);

        // //remove local files
        // fs.unlinkSync(file.path);
      }
    }

    const product = await productModel.create({
      name,
      description,
      price,
      category,
      stock,
      subCategory,
      sizes,
      bestSeller,

      images: imageUrls,

      createdBy: req.user._id,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

//get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    return res.status(200).json({
      message: "Fetched all products successfully",
      products: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching product",
      error: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Productd deleted Successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in deleting",
      error: error.message,
    });
  }
};

export const getBestsellerProducts = async (req, res) => {
  try {
    const products = await productModel.find({ bestSeller: true });

    return res.status(200).json({
      message: "Fetched best seller products",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

