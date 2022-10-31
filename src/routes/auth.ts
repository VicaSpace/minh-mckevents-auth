import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { authController } from '@/controllers/auth';

const router = Router();

router.post('/register', asyncHandler(authController.registerHandler));
router.post('/login', asyncHandler(authController.loginHandler));

export { router as authRouter };
