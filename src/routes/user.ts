import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { userController } from '@/controllers/user';
import { authenticateUser } from '@/middlewares/auth';

const router = Router();

router.get(
  '/:id',
  authenticateUser,
  asyncHandler(userController.getUserDetailHandler)
);

export { router as userRouter };
