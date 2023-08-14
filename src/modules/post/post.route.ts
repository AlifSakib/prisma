import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create-post", postController.insertToDb);
router.get("/", postController.getAllPosts);

export const PostRoute = router;
