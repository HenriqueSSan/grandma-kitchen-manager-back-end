// #################################################################################################### //
// ---------------------------------------------------------------------------------------------------- //
// #################################################################################################### //

import { ProductPrismaRepository } from '../repository/prisma/product.prisma.repository';
import { ProductCreateUsecase } from '../usecase/product.create.usecase';
import { ProductDeleteUsecase } from '../usecase/product.delete.usecase';
import { ProductListUsecase } from '../usecase/product.list.usescase';
import { ProductQueryUsecase } from '../usecase/product.query.usecase';
import { ProductUpdateUsecase } from '../usecase/product.update.usecase';

// prettier-ignore
export const productRepository = new ProductPrismaRepository();

// #################################################################################################### //
// ---------------------------------------------------------------------------------------------------- //
// #################################################################################################### //

// prettier-ignore
export const productListUsecase = new ProductListUsecase(productRepository);

// prettier-ignore
export const productQueryUsecase = new ProductQueryUsecase(productRepository);

// prettier-ignore
export const productCreateUsecase = new ProductCreateUsecase(productRepository);

// prettier-ignore
export const productUpdateUsecase = new ProductUpdateUsecase(productRepository);

// prettier-ignore
export const productDeleteUsecase = new ProductDeleteUsecase(productRepository);

// #################################################################################################### //
// ---------------------------------------------------------------------------------------------------- //
// #################################################################################################### //
