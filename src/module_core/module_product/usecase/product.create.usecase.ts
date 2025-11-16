import { Request, Response } from 'express';
import { ProductRepository } from '../repository/product.repository';
import { ProductCreateDto } from '../dto/product.create.dto';
import { SkuGenerator } from '~/src/module_helper/SkuGenerator';

export class ProductCreateUsecase {
  constructor(private productRepository: ProductRepository) {}

  async handle(req: Request, res: Response) {
    console.log(
      SkuGenerator.handle().generate({
        prefix: "KOKO",
        productName: 'OVO',
        brand: 'GRANJA LIZA',
        category: 'ANIMAL',
        separator: '_',
      }),
    );

    return {};

    // const productCreateDto = new ProductCreateDto(req.body.name, req.body.qty, req.body.qty_minium);

    // const product = await this.productRepository.save({

    //   name: productCreateDto.name,
    // });

    // return product;
  }
}
