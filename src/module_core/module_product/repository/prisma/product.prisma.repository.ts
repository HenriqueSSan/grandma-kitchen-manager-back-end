import { Prisma, Product } from '@prisma/client';
import { prisma } from '#infra/config/prisma';

import { ProductRepository } from '../product.repository';

export class ProductPrismaRepository implements ProductRepository {
  async count(payload: Prisma.ProductWhereInput): Promise<number> {
    return await prisma.product.count({ where: payload });
  }

  async list<T extends Prisma.ProductFindManyArgs>(payload: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>) {
    return await prisma.product.findMany(payload);
  }

  async findById<T extends Prisma.ProductFindFirstArgs>(payload: Prisma.SelectSubset<T, Prisma.ProductFindFirstArgs>) {
    return await prisma.product.findFirst(payload);
  }

  async save(payload: Prisma.ProductCreateInput): Promise<Product | null> {
    return await prisma.product.create({ data: payload });
  }

  async update({ id, ...payload }: { id: number } & Prisma.ProductUpdateInput): Promise<Product | null> {
    return await prisma.product.update({ where: { id }, data: payload });
  }

  async delete(payload: { id: number }): Promise<Product | null> {
    return await prisma.product.delete({ where: { id: payload.id } });
  }
}
