import express from "express";

const router = express.Router();

import { ProductModel } from "../models/Products.js";

//register
router.post("/", async (req, res) => {
  try {
    const { productname, quantity, price } = req.body;
    const product = await ProductModel.findOne({ productname });
    if (product) {
      return res.status(400).json({ message: "productname already exists" });
    }
    const newProduct = new ProductModel({ productname, quantity, price });
    await newProduct.save();
    res.json({ message: "Product registered successfully" });
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  ProductModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

export { router as ProductRouter };
