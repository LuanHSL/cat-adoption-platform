import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    fullName,
    email,
    telephone,
    observation,
    catId,
  } = body;

  const newAdoption = await prisma.adoption.create({
    data: {
      fullName,
      email,
      telephone,
      observation,
      catId,
    },
  });
  return newAdoption;
});