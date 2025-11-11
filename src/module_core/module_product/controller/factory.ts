// #################################################################################################### //
// ---------------------------------------------------------------------------------------------------- //
// #################################################################################################### //

import { ProductPrismaRepository } from '../repository/prisma/product.prisma.repository';
import { ProductCreateUsecase } from '../usecase/product.create.usecase';
import { ProductDeleteUsecase } from '../usecase/product.delete.usecase';
import { ProductListUsecase } from '../usecase/product.list.usescase';

// prettier-ignore
export const productRepository = new ProductPrismaRepository();

// #################################################################################################### //
// ---------------------------------------------------------------------------------------------------- //
// #################################################################################################### //

// prettier-ignore
export const productListUsecase = new ProductListUsecase(productRepository);

// prettier-ignore
export const productCreateUsecase = new ProductCreateUsecase(productRepository);

// prettier-ignore
export const productDeleteUsecase = new ProductDeleteUsecase(productRepository);

// #################################################################################################### //
// ---------------------------------------------------------------------------------------------------- //
// #################################################################################################### //
