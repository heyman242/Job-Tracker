import {Router} from 'express';
import { updatedUser, getApplicationStats, getCurrentUser } from '../controllers/userController.js';
import {validateUpdateUserInput} from '../middleware/validationMiddleware.js'
const router = Router();


router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats)
router.patch("/update-user", validateUpdateUserInput, updatedUser);

export default router;