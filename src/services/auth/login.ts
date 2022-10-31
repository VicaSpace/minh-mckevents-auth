import { AppUser } from '@prisma/client';
import createHttpError from 'http-errors';
import * as jwt from 'jsonwebtoken';

import config from '@/config';
import { prisma } from '@/db';

interface LoginPayload {
  username: string;
  password: string;
}

/**
 * Login a User with provided credentials
 * @param payload Payload
 * @returns Access Token
 */
export const login = async (payload: LoginPayload) => {
  const { username, password } = payload;

  // Check if username exists
  let user: AppUser | undefined;
  try {
    user = await prisma.appUser.findFirstOrThrow({
      where: {
        username,
      },
    });
  } catch (_err) {
    throw createHttpError(403, 'Cannot login, invalid username.');
  }

  // Verify password
  if (user.password !== password) {
    throw createHttpError(403, 'Cannot login, invalid password.');
  }

  // Sign an access token with payload
  const accessToken = jwt.sign(
    {
      id: user.id,
      username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    config.jwt.secret,
    {
      expiresIn: config.jwt.expireHours,
    }
  );

  return accessToken;
};
