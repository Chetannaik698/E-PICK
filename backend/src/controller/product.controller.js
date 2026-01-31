import productModel from "../models/product.model.js";

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
    const product = await productModel.create({
      name,
      description,
      price,
      category,
      stock,
      subCategory,
      sizes,
      bestSeller,

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
export const getAllProducts = async(req, res) => {
  try {
    
    const products = await productModel.find();

    return res.status(200).json({
      message: "Products fetched successfully",
      products: products,
    })

  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
}