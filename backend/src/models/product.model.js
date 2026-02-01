import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCatagory: {
    type: String,
    default: "",
  },
  sizes: {
    type: [String],
    required: true,
    default: ["S", "M", "L", "XL"],
  },
  bestSeller: {
    type: Boolean,
    default: false,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  images: {
    type: [String],
    default: []
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
