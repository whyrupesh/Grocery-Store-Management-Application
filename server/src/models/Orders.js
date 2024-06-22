import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Defining the Order schema
const OrderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  products: {
    type: [productSchema],
    required: true,
  },
});

export const OrderModel = mongoose.model("Orders", OrderSchema);
