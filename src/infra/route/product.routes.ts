import express from 'express';
import { ProductController } from '../../module_controller/product.controller';

const router = express.Router();

const productController = new ProductController();

router.get('/products', async (req, res) => {
  await productController.list(req, res);
});

router.get('/products/:product_id', async (req, res) => {
  await productController.query(req, res);
});

router.post('/products', async (req, res) => {
  await productController.create(req, res);
});

router.put('/products/:product_id', async (req, res) => {
  await productController.update(req, res);
});

router.delete('/products/:product_id', async (req, res) => {
  await productController.update(req, res);
});

export { router as product_router };
