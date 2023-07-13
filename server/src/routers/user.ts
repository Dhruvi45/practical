import express from "express";
import { userController } from "../controller/user";

const router = express();

router.post("/user/create", userController.createUser);

export {router as UserRouter}
