import { Brand, Prisma } from '@prisma/client';

export interface BrandRepository {
  count(payload?: Prisma.BrandWhereInput): Promise<number>;

  list<T extends Prisma.BrandFindManyArgs>(
    payload: Prisma.SelectSubset<T, Prisma.BrandFindManyArgs>,
  ): Promise<Prisma.BrandGetPayload<T>[]>;

  findById<T extends Prisma.BrandFindFirstArgs>(
    payload: Prisma.SelectSubset<T, Prisma.BrandFindFirstArgs>,
  ): Promise<Prisma.BrandGetPayload<T> | null>;

  save(payload: Prisma.BrandCreateInput): Promise<Brand | null>;

  update(payload: { id: number } & Prisma.BrandUpdateInput): Promise<Brand | null>;

  delete(payload: { id: number }): Promise<Brand | null>;
}
