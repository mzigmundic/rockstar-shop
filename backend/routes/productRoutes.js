import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

// @desc    Fetch All Products
// @route   GET /api/products
// @desc    Public
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await Product.find({});

        res.json(products);
    })
);

// @desc    Fetch Single Product
// @route   GET /api/products/:id
// @desc    Public
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    })
);

export default router;
