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

router.put("/", async (req, res, next) => {
  try {
    const { productname, quantity, price } = req.body;

    // Check if a document with the same productname already exists
    const existingProduct = await ProductModel.findOne({ productname });

    if (existingProduct) {
      // Update the existing document instead of inserting a new one
      existingProduct.quantity = quantity;
      existingProduct.price = price;
      await existingProduct.save();
      res.json({ message: "Product updated successfully" });
    } else {
      // Insert a new document
      const newProduct = new ProductModel({ productname, quantity, price });
      await newProduct.save();
      res.json({ message: "Product inserted successfully" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    const product = req.body;
    const deletedProduct = await ProductModel.findOneAndDelete(product);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as ProductRouter };
