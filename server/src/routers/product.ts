import express from "express";
import { productController } from "../controller/product";

const router = express();

router.post("/product/create", productController.createProduct);
router.get("/product/getAllProductList", productController.getAllProduct);

export {router as ProductRouter}
