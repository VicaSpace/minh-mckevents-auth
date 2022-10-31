import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

const seedUser = async () => {
  await prisma.appUser.create({
    data: {
      firstName: 'Minh',
      lastName: 'Nguyen',
      email: 'minhlucky@gmail.com',
      username: 'minh',
      password: '123456',
    },
  });
};

async function main() {
  await seedUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
