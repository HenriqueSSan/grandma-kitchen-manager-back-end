import { Request, Response } from 'express';
import { ProductRepository } from '../repository/product.repository';
import { ProductCreateDto } from '../dto/product.create.dto';

export class ProductCreateUsecase {
  constructor(private productRepository: ProductRepository) {}

  async handle(req: Request, res: Response) {
    const productCreateDto = new ProductCreateDto(req.body.name, req.body.qty, req.body.qty_minium);

    const product = await this.productRepository.save({
      qty_minium: productCreateDto.qty_minium,
      name: productCreateDto.name,
      qty: productCreateDto.qty,
    });

    return product;
  }
}
