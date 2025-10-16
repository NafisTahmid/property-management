import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  createPropertyController,
  getPropertiesController,
  getPropertyController,
  deletePropertyController,
  updatePropertyController,
} from "../controllers/propertyController.js";
const router = express.Router();

router.post("/add", authMiddleware, createPropertyController);
router.get("/all", getPropertiesController);
router.get("/:pk", getPropertyController);
router.patch("/:id", updatePropertyController);
router.delete("/:id", authMiddleware, deletePropertyController);
export default router;
