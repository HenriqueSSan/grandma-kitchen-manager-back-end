import { Request, Response } from 'express';
import { ProductRepository } from '../repository/product.repository';
import { AppError } from '~/src/infra/core/app-error';
import { ProductUpdateDto } from '../dto/product.update.dto';

export class ProductUpdateUsecase {
  constructor(private productRepository: ProductRepository) {}

  async handle(req: Request, res: Response) {
    const product_id = req.params.product_id;

    const productUpdateDto = new ProductUpdateDto(req.body.name, req.body.qty, req.body.qty_minium);

    const product = await this.productRepository.findById({ where: { id: parseInt(product_id) } });

    if (!product) throw new AppError('Produto não encontrado!', 404);

    return await this.productRepository.update({ id: parseInt(product_id), ...productUpdateDto });
  }
}
