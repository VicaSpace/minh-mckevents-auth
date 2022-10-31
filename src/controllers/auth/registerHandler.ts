import { Request, Response } from 'express';

import { register } from '@/services/auth/register';

/**
 * Register a User handler
 * @param req Request
 * @param res Response
 */
export const registerHandler = async (req: Request, res: Response) => {
  const { body } = req;
  const registeredUser = await register({
    username: body.username,
    password: body.password,
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
  });
  res.status(200).json({
    message: `User ${registeredUser.username} registered successfully.`,
  });
};
