import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertIntoDB);
router.post("/update-profile", userController.insertOrUpdateProfile);

export const UserRoutes = router;
