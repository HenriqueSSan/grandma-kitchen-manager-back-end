import { Prisma, Stock } from '@prisma/client';

export interface StockRepository {
  count(payload?: Prisma.StockWhereInput): Promise<number>;

  list<T extends Prisma.StockFindManyArgs>(
    payload: Prisma.SelectSubset<T, Prisma.StockFindManyArgs>,
  ): Promise<Prisma.StockGetPayload<T>[]>;

  findById<T extends Prisma.StockFindFirstArgs>(
    payload: Prisma.SelectSubset<T, Prisma.StockFindFirstArgs>,
  ): Promise<Prisma.StockGetPayload<T> | null>;

  save(payload: Prisma.StockCreateInput): Promise<Stock | null>;

  update(payload: { id: number } & Prisma.StockUpdateInput): Promise<Stock | null>;

  delete(payload: { id: number }): Promise<Stock | null>;
}
