import express from "express";
import { OrderModel } from "../models/Orders.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { customerName, products } = req.body;
    const Order = new OrderModel({ customerName, products });
    await Order.save();
    res.json({ message: "Order Created successfully" });
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  OrderModel.find()
    .then((order) => res.json(order))
    .catch((err) => res.json(err));
});

export { router as OrderRouter };
