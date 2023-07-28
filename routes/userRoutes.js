import { Router } from "express";
import {
  updatedUser,
  getApplicationStats,
  getCurrentUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStats
);
router.patch("/update-user", validateUpdateUserInput, updatedUser);

export default router;
