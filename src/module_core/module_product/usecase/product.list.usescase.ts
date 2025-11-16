import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { ProductRepository } from '../repository/product.repository';

export class ProductListUsecase {
  constructor(private productRepository: ProductRepository) {}

  async handle(req: Request, res: Response) {
    const query = req.query as { offset: string; limit: string; search: string };

    const { offset = 0, limit = 10 } = { offset: parseInt(query.offset), limit: parseInt(query.limit) };

    const result = await this.getProductListBySearch({
      search: query.search,
      take: limit,
      skip: offset,
    });

    return {
      results: result.products,
    };
  }

  private async getProductListBySearch(searchParams: { take: number; skip: number; search: string }) {
    const { search, skip, take } = searchParams;

    const searchOrWithWhereParam: Prisma.ProductWhereInput | undefined = search
      ? { OR: [{ name: { contains: search } }] }
      : undefined;

    const [count, filter_count, products] = await Promise.all([
      this.productRepository.count(),
      this.productRepository.count({ ...searchOrWithWhereParam }),
      this.productRepository.list({
        skip,
        take,
        where: { ...searchOrWithWhereParam },
        select: { id: true, qty: true, name: true, qty_minium: true, created_at: true, updated_at: true },
      }),
    ]);

    return { count, filter_count, products };
  }
}
