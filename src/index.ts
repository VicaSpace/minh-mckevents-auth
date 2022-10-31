import { AppUser } from '@prisma/client';
import main from 'main';

import { logger } from '@/utils/logger';

declare module 'express-serve-static-core' {
  interface Request {
    user: AppUser;
    token: string;
  }
}

main().catch((err) => logger.error(err));
