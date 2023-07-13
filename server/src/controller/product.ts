import { Request, Response } from "express";
import { Product } from "../modal/product";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create({
      ...req.body,
      CreatedAt: new Date(),
      CreatedBy: 1,
    });
    await res.status(201).json(product);
  } catch (error) {
    console.log("error", error);
    await res.status(400).json(error);
  }
};

const getAllProduct = async(req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    await res.status(201).json(products);
  } catch (error) {
    console.log("error", error);
    await res.status(400).json(error);
  }
};

const controller = {
  createProduct,
  getAllProduct,
};

export { controller as productController };
