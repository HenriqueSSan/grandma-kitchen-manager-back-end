import express from 'express';
import { product_router } from './product.routes';

const router = express.Router();

router.use('/products', product_router);

export default router;
