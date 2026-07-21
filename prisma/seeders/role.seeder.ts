import { PrismaClient } from '@prisma/client';

export async function seedRoles(prisma: PrismaClient) {
  await prisma.role.createMany({
    data: [{ name: 'ADMIN' }, { name: 'USER' }],
    skipDuplicates: true,
  });

  console.log('Roles seeded');
}
