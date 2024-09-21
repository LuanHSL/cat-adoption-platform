import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const deletedCat = await prisma.cat.delete({ where: { id: Number(id) } });
  return deletedCat;
});