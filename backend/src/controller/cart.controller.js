import { json } from "express";
import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

//Add item to cart
export const addToCart = async (req, res) => {
  const { productId, size, quantity } = req.body;

  if (!productId || !size) {
    return res.status(400).json({ message: "Product and size required" });
  }

  try {
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!product.sizes.includes(size)) {
      return res.status(400).json({ message: "Invalid Size" });
    }

    let cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      cart = await cartModel.create({
        user: req.user._id,
        items: [],
      });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId && item.size === size,
    );

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({
        product: productId,
        size,
        quantity: quantity || 1,
      });
    }

    await cart.save();

    return res.status(200).json({
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add to cart",
      error: error.message,
    });
  }
};

//Get cart
export const getCart = async (req, res) => {
  try {
    const cartItems = await cartModel
      .find({ user: req.user._id })
      .populate("items.product");

    if (!cartItems) {
      return res.status(200).json({
        message: "Cart is empty",
        cartItems: [],
      });
    }

    return res.status(200).json({
      message: "Cart Items Fetched",
      cartItems,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting cart data",
      error: error.message,
    });
  }
};

//update cart item
export const updateCartItems = async (req, res) => {
  const { quantity } = req.body;
  const { itemId } = req.params;

  if (quantity < 1) {
    return res.status(400).json({ message: "Quantity must be at least 1" });
  }

  try {
    const cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.id(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;

    await cart.save();

    return res.status(200).json({
      message: "Cart Updated",
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in Updating Cart",
      error: error.message,
    });
  }
};

//delete item from cart
export const deleteCartItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item._id.toString() !== itemId);

    await cart.save()

    return res.status(200).json({
        message: "Item is removed from the cart",
        cart
    })
  } catch (error) {
    return res.status(500).json({
        message: "Error in removing item",
        error: error.message
    })
  }
};
