import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create-post", postController.insertToDb);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/", postController.getAllPosts);
router.get("/learnquery", postController.learningAggrigateAndGrouping);

export const PostRoute = router;
