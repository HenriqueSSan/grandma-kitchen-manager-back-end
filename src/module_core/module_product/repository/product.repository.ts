import { Prisma, Product } from '@prisma/client';

export interface ProductRepository {
  count(payload: Prisma.ProductWhereInput): Promise<number>;

  list<T extends Prisma.ProductFindManyArgs>(
    payload: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>,
  ): Promise<Prisma.ProductGetPayload<T>[]>;

  findById<T extends Prisma.ProductFindFirstArgs>(
    payload: Prisma.SelectSubset<T, Prisma.ProductFindFirstArgs>,
  ): Promise<Prisma.ProductGetPayload<T> | null>;

  save(payload: Prisma.ProductCreateInput): Promise<Product | null>;

  update(payload: { id: number } & Prisma.ProductUpdateInput): Promise<Product | null>;

  delete(payload: { id: number }): Promise<Product | null>;
}
