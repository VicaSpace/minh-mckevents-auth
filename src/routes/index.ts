import { Router } from 'express';

import { authRouter } from '@/routes/auth';
import { logger } from '@/utils/logger';

const router = Router();

router.use('/auth', authRouter);
logger.info(`Mounted authController (/auth) ✅`);

export default router;
