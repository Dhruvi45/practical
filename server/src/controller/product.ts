import { Request, Response } from "express";
import { Product } from "../modal/product";

const createProdtct = (req: Request, res: Response) => {
  try {
    const product = Product.create({
      ...req.body,
      CreatedAt: new Date(),
      CreatedBy: 1,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log("error", error);
    res.status(400).json(error);
  }
};

const getAllProdtct = (req: Request, res: Response) => {
  try {
    const products = Product.findAll();
    res.status(201).json(products);
  } catch (error) {
    console.log("error", error);
    res.status(400).json(error);
  }
};

const controller = {
  createProdtct,
  getAllProdtct,
};

export { controller as productController };
