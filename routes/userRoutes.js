import express from "express";
import {
  registerController,
  loginController,
  getAllUsersController,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/all", getAllUsersController);
export default router;
