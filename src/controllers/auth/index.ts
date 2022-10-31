import { loginHandler } from '@/controllers/auth/loginHandler';
import { registerHandler } from '@/controllers/auth/registerHandler';

export const authController = {
  registerHandler,
  loginHandler,
};
