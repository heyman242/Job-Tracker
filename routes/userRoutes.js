import {Router} from 'express';
import { UpdatedUser, getApplicationStats, getCurrentUser } from '../controllers/userController.js';
const router = Router();


router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats)
router.patch('/update-user', UpdatedUser);

export default router;