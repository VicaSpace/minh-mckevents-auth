import { prisma } from '@/db';

interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

/**
 * Register a User
 * @param payload Payload
 * @returns Registered User
 */
export const register = async (payload: RegisterPayload) => {
  const user = await prisma.appUser.create({
    data: {
      ...payload,
    },
  });
  return user;
};
