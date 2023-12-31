import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSignleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseInt(req?.params?.id));
    res.send({
      success: true,
      message: "User Get Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      success: true,
      message: "User Get Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const userController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getSignleUser,
  getUsers,
};
