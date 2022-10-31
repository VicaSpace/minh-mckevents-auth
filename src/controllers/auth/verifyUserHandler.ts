import { Request, Response } from 'express';

import { verify } from '@/services/auth/verify';

/**
 * Verify a User handler
 * @param req Request
 * @param res Response
 */
export const verifyHandler = async (req: Request, res: Response) => {
  const { query } = req;
  const verifyUser = await verify({
    accessToken: query.accessToken as string,
  });
  res.status(200).json(verifyUser);
};
