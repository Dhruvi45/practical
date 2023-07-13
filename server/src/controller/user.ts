import { Request, Response } from "express";
import { User } from "../modal/user";
import { ResponseType, generateAuthToken, setResponse } from "../common";

const createUser = async (req: Request, res: Response) => {
  try {
    console.log("req.body", req.body);
    const IsExistUser = await User.findOne({
      where: { Email: req.body.Email },
      raw: true,
    });
    if (IsExistUser) {
      return setResponse(
        res,
        409,
        ResponseType.error,
        "User already exist",
        {}
      );
    }
    const user = await User.create({
      ...req.body,
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    });
    const token = await generateAuthToken(user.UserId);
    setResponse(res, 201, ResponseType.success, "User created successfully", {
      user,
      token,
    });
  } catch (error) {
    console.log("error", error);
    return setResponse(
      res,
      409,
      ResponseType.error,
      "Error in creating user",
      error
    );
  }
};

const controller = {
  createUser,
};

export { controller as userController };
