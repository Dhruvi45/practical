import express from "express";
import { productController } from "../controller/product";

const router = express();

router.post("/product/create", productController.createProdtct);
router.get("/product/getAllProductList", productController.getAllProdtct);

export {router as ProductRouter}
