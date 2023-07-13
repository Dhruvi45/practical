import jwt from "jsonwebtoken"
import { getJwtSecretKey } from "./config";

export enum ResponseType {
  success = "S",
  error = "E",
}

export const generateAuthToken = (id: number) => {
  return jwt.sign({ _id: id }, getJwtSecretKey(), {
    expiresIn: '10m'
  }); // process.env.JWT_SECRET)
};

export function setResponse(
  res: any,
  statusCode = 200,
  status = "S",
  message = "operation completed successfully",
  data:any
) {
  return res.status(statusCode).json({
    status: status === ResponseType.success ? "success" : "error",
    message,
    ...data,
  });
}