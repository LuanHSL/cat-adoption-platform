import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, description, image } = body;
  const newCat = await prisma.cat.create({ data: { name, description, image } });
  return newCat;
});