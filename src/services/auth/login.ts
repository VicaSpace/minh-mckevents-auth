import { AppUser } from '@prisma/client';
import createHttpError from 'http-errors';

import { prisma } from '@/db';

interface LoginPayload {
  username: string;
  password: string;
}

/**
 * Register a User
 * @param payload Payload
 * @returns Registered User
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
    throw createHttpError(403, 'Cannot login, invalid credentials.');
  }

  // Compare password
  if (user.password !== password) {
    throw createHttpError(403, 'Cannot login, invalid credentials');
  }

  // Sign a payload
};
