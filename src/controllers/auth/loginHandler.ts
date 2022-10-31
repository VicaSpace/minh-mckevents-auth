import { Request, Response } from 'express';

import { login } from '@/services/auth/login';

/**
 * Login a User handler
 * @param req Request
 * @param res Response
 */
export const loginHandler = async (req: Request, res: Response) => {
  const { body } = req;
  const accessToken = await login({
    username: body.username,
    password: body.password,
  });
  res.status(200).json({
    message: `User ${body.username} login successfully.`,
    accessToken,
  });
};
