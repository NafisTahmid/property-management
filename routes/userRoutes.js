import express from "express";
import {
  registerController,
  loginController,
  getAllUsersController,
  createAdminUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/all", getAllUsersController);
router.post("/create-admin", createAdminUser);
export default router;
