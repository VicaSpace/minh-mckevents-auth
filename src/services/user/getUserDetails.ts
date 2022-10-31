import createHttpError from 'http-errors';

import { prisma } from '@/db';

interface GetUserDetailPayload {
  userId: number;
}

/**
 * Get a User's detail
 * @param payload Payload
 * @returns User detail
 */
export const getUserDetail = async (payload: GetUserDetailPayload) => {
  const { userId } = payload;
  const user = await prisma.appUser.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw createHttpError(404, 'User not found.');
  }
  return user;
};
