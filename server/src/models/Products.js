import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
});

export const ProductModel = mongoose.model("products", ProductSchema);
