import createHttpError from 'http-errors';
import * as jwt from 'jsonwebtoken';

import config from '@/config';

interface VerifyPayload {
  accessToken: string;
}

interface VerifyUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * Verify a User
 * @param payload Payload
 * @returns Verify User
 */
export const verify = async (payload: VerifyPayload) => {
  const { accessToken } = payload;

  let verifyUser: VerifyUser | null = null;
  try {
    verifyUser = jwt.verify(accessToken, config.jwt.secret) as VerifyUser;
  } catch (err) {
    throw createHttpError(400, 'Cannot verify user, invalid token.');
  }
  return verifyUser;
};
