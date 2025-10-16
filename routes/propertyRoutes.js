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

router.post("/property", authMiddleware, createPropertyController);
router.get("/properties", getPropertiesController);
router.get("/property/:id", getPropertyController);
router.put("/property/:id", updatePropertyController);
router.delete("/property/:id", authMiddleware, deletePropertyController);
export default router;
