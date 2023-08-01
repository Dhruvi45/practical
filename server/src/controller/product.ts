import { Request, Response } from "express";
import { Product } from "../modal/product";
var fs = require("file-system");

const createProduct = async (req: Request, res: Response) => {
  try {
    const { filename, filetype, data } = req.body.Image;

    if (data !== "" || data !== null) {
      const fileData = Buffer.from(data, "base64");

      await fs.writeFile(
        `./productImages/${filename}`,
        fileData,
        (err: Error) => {
          if (err) {
            console.log(`Upload error:${filename} - ${err}`);
          } else {
            console.log(`Upload success:${filename}`);
          }
        }
      );

      req.body.Image = filename;
    }
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

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    await res.status(201).json(products);
  } catch (error) {
    console.log("error", error);
    await res.status(400).json(error);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    console.log("call")
    const products = await Product.findOne({
      where: { ProductId: req.params.id },
    });
    if (!products) {
      await res.status(404).json("Product not found");
    }
    await res.status(200).json(products);
  } catch (error) {
    console.log("error", error);
    await res.status(400).json(error);
  }
};

const controller = {
  createProduct,
  getAllProduct,
  getProduct,
};

export { controller as productController };
