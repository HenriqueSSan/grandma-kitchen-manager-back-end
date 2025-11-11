import { Request, Response } from 'express';
import { ProductRepository } from '../repository/product.repository';

export class ProductCreateUsecase {
  constructor(private productRepository: ProductRepository) {}

  async handle(req: Request, res: Response) {}
}
