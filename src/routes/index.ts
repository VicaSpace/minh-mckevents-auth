import { Router } from 'express';

import { authRouter } from '@/routes/auth';
import { userRouter } from '@/routes/user';
import { logger } from '@/utils/logger';

const router = Router();

router.use('/auth', authRouter);
logger.info(`Mounted authController (/auth) ✅`);
router.use('/users', userRouter);
logger.info(`Mounted userController (/users) ✅`);

export default router;
