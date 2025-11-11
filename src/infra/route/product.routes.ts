import express, { Request, Response } from 'express';
import { ProductController } from '../../module_controller/product.controller';

const router = express.Router();

const productController = new ProductController();

const controller =
  (controllerMethodStringIndex: keyof typeof productController) => async (req: Request, res: Response) => {
    await productController[controllerMethodStringIndex](req, res);
  };

router.get('/', controller('list'));

router.get('/:product_id', controller('query'));

router.post('/', controller('create'));

router.put('/:product_id', controller('update'));

router.delete('/:product_id', controller('delete'));

export { router as product_router };
