import { Request, Response } from "express";
import { postService } from "./post.service";

const insertToDb = async (req: Request, res: Response) => {
  console.log(req?.body);

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
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id);
  const data = req?.body;
  try {
    const result = await postService.updatePost(id, data);
    res.send({
      success: true,
      message: "Post Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id);
  try {
    const result = await postService.deletePost(id);
    res.send({
      success: true,
      message: "Post Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learningAggrigateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await postService.learningAggrigateAndGrouping();
    res.send({
      success: true,
      message: "Post Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  insertToDb,
  getAllPosts,
  updatePost,
  deletePost,
  learningAggrigateAndGrouping,
};
