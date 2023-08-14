import { Request, Response } from "express";
import { postService } from "./post.service";

const insertToDb = async (req: Request, res: Response) => {
  try {
    const result = await postService.insertToDb(req?.body);
    res.send({
      success: "true",
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  console.log(req?.query);
  const options = req?.query;
  try {
    const result = await postService.getAllPosts(options);
    res.send({
      success: true,
      message: "Fetched All Posts",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  insertToDb,
  getAllPosts,
};
