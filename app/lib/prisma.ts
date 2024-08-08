import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProducts() {
  return await prisma.product.findMany();
}

export async function getProductById(id: number) {
  return await prisma.product.findUnique({ where: { id } });
}
