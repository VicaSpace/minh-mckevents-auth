import { loginHandler } from '@/controllers/auth/loginHandler';
import { registerHandler } from '@/controllers/auth/registerHandler';
import { verifyHandler } from '@/controllers/auth/verifyUserHandler';

export const authController = {
  registerHandler,
  loginHandler,
  verifyHandler,
};
