import cartModel from "../models/cart.model.js";
import orderModel from "../models/order.model.js";
import productModel from "../models/product.model.js";

export const placeOrder = async (req, res) => {
  const { shippingAddress, paymentMethod } = req.body;
  try {
    const cart = await cartModel
      .findOne({ user: req.user._id })
      .populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let subtotal = 0;
    const orderItems = [];

    for (const item of cart.items) {
      const product = item.product;

      if (!product) {
        return res.status(400).json({
          message: "One product in cart no longer exists",
        });
      }

      if (item.quantity > product.stock) {
        return res.status(400).json({
          message: "Product is out of tock",
        });
      }

      subtotal += product.price * item.quantity;

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: item.size,
        quantity: item.quantity,
      });
    }
    const shippingFee = subtotal > 2000 ? 0 : 100;
    const totalAmount = subtotal + shippingFee;

    const order = await orderModel.create({
      user: req.user._id,
      items: orderItems,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    for (const item of cart.items) {
      await productModel.findByIdAndUpdate(item.product._id, {
        $inc: { stock: -item.quantity },
      });
    }

    cart.items = [];
    await cart.save();

    return res.status(200).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to place order",
      error: error.message,
    });
  }
};
