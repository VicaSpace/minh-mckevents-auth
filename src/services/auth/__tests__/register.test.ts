/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@/db';
import { register } from '@/services/auth/register';

describe('test auth/register service', () => {
  it('should return a newly registered user with correct username', async () => {
    const mockRes = {
      username: 'kha',
      password: '123456',
      firstName: 'Kha',
      lastName: 'Bui',
      email: 'khaxink@gmail.com',
    };
    jest.spyOn(prisma.appUser, 'create').mockResolvedValue(mockRes as any);
    const res = await register({
      username: 'kha',
      password: '123456',
      firstName: 'Kha',
      lastName: 'Bui',
      email: 'khaxink@gmail.com',
    });
    expect(res).toMatchObject(mockRes);
  });

  it('should throw errors when encounter one', async () => {
    jest.spyOn(prisma.appUser, 'create').mockRejectedValue(new Error());
    expect(register).rejects.toThrow();
  });
});
