import { Prisma, StockMove } from "@prisma/client";

export interface StockMoveRepository {
  count(payload?: Prisma.StockMoveWhereInput): Promise<number>;

  list<T extends Prisma.StockMoveFindManyArgs>(
    payload: Prisma.SelectSubset<T, Prisma.StockMoveFindManyArgs>,
  ): Promise<Prisma.StockMoveGetPayload<T>[]>;

  findById<T extends Prisma.StockMoveFindFirstArgs>(
    payload: Prisma.SelectSubset<T, Prisma.StockMoveFindFirstArgs>,
  ): Promise<Prisma.StockMoveGetPayload<T> | null>;

  save(payload: Prisma.StockMoveCreateInput): Promise<StockMove | null>;

  update(payload: { id: number } & Prisma.StockMoveUpdateInput): Promise<StockMove | null>;

  delete(payload: { id: number }): Promise<StockMove | null>;
}