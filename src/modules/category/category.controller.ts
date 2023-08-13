import { Request, Response } from "express";
import { categoryService } from "./category.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.insertIntoDB(req?.body);
    res.send({
      success: true,
      meaasge: "Category Created Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const categoryController = {
  insertIntoDB,
};
