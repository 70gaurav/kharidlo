import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const addNewUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, dob, role, gender, _id } = req.body;

    const user = await User.create({
      name,
      email,
      photo,
      dob,
      role,
      gender,
      _id,
    });

    return res.status(200).send({
      success: true,
      message: `Welcome ${user.name}`,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
    });
  }
};
