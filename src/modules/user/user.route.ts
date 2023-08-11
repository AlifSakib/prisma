import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertIntoDB);
router.post("/update-profile", userController.insertOrUpdateProfile);
router.get("/:id", userController.getSignleUser);
router.get("/", userController.getUsers);

export const UserRoutes = router;
