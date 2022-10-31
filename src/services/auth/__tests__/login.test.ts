/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@/db';
import { login } from '@/services/auth/login';

describe('test auth/login service', () => {
  it('should return access token if user provided credentials is valid', async () => {
    jest.spyOn(prisma.appUser, 'findFirstOrThrow').mockResolvedValue({
      username: 'minh',
      password: '123456',
    } as any);

    const accessToken = await login({
      username: 'minh',
      password: '123456',
    });
    expect(accessToken).not.toBeNull();
  });
  it('should throw error when user does not exist', async () => {
    jest
      .spyOn(prisma.appUser, 'findFirstOrThrow')
      .mockRejectedValue(new Error());

    expect(
      login({
        username: 'any',
        password: 'any',
      })
    ).rejects.toThrow();

    expect(
      login({
        username: 'any',
        password: 'any',
      })
    ).rejects.toMatchObject({
      message: 'Cannot login, invalid username.',
    });
  });

  it('should throw when password does not match', async () => {
    jest.spyOn(prisma.appUser, 'findFirstOrThrow').mockResolvedValue({
      username: 'any',
      password: '123456',
    } as any);

    expect(
      login({
        username: 'any',
        password: 'any',
      })
    ).rejects.toThrow();

    expect(
      login({
        username: 'any',
        password: 'any',
      })
    ).rejects.toMatchObject({
      message: 'Cannot login, invalid password.',
    });
  });
});
