import { Request, Response } from 'express';
import { ProductRepository } from '../repository/product.repository';
import { AppError } from '~/src/infra/core/app-error';

export class ProductQueryUsecase {
  constructor(private productRepository: ProductRepository) {}

  async handle(req: Request, res: Response) {
    const product_id = req.params.product_id;

    const product = await this.productRepository.findById({ where: { id: parseInt(product_id) } });

    if (!product) throw new AppError('Produto não encontrado!', 404);

    return product;
  }
}
