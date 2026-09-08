import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const email = process.argv[2];
const role = process.argv[3];

if (!email || !role || !['ADMIN', 'LAB_MANAGER'].includes(role)) {
  console.error('Usage: npm run promote-user -- <email> <ADMIN|LAB_MANAGER>');
  process.exitCode = 1;
} else {
  prisma.user.findUnique({ where: { email } })
    .then(async (user) => {
      if (!user) {
        throw new Error(`No user found with email "${email}". Register that account first, then run this command again.`);
      }

      const updatedUser = await prisma.user.update({ where: { email }, data: { role } });
      console.log(`${updatedUser.email} is now ${updatedUser.role}`);
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}