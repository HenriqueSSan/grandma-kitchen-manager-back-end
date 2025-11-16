import { Category, Prisma } from '@prisma/client';

export interface CategoryRepository {
  count(payload?: Prisma.CategoryWhereInput): Promise<number>;

  list<T extends Prisma.CategoryFindManyArgs>(
    payload: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>,
  ): Promise<Prisma.CategoryGetPayload<T>[]>;

  findById<T extends Prisma.CategoryFindFirstArgs>(
    payload: Prisma.SelectSubset<T, Prisma.CategoryFindFirstArgs>,
  ): Promise<Prisma.CategoryGetPayload<T> | null>;

  save(payload: Prisma.CategoryCreateInput): Promise<Category | null>;

  update(payload: { id: number } & Prisma.CategoryUpdateInput): Promise<Category | null>;

  delete(payload: { id: number }): Promise<Category | null>;
}
