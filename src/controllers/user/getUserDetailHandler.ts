import { Request, Response } from 'express';

import { getUserDetail } from '@/services/user/getUserDetails';

/**
 *  Get User Detail handler
 * @param req Request
 * @param res Response
 */
export const getUserDetailHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserDetail({
    userId: Number(id),
  });
  res.status(200).json(user);
};
