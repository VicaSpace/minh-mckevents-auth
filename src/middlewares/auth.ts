import { AppUser } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import * as jwt from 'jsonwebtoken';

import config from '@/config';

// Verify user middleware
export const authenticateUser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const decodedUser = jwt.verify(req.token, config.jwt.secret);
    req.user = decodedUser as AppUser;
    next();
  } catch (err) {
    next(
      createHttpError(401, 'Corrupted/Invalid credentials, please login first.')
    );
  }
};
