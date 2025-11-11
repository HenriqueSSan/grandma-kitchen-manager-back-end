import { Request, Response } from 'express';
import {
  productCreateUsecase,
  productDeleteUsecase,
  productListUsecase,
  productQueryUsecase,
} from '../module_core/module_product/controller/factory';

import { AppError } from '../infra/core/app-error';

export class ProductController {
  async list(req: Request, res: Response) {
    try {
      const productListUsecaseResponse = await productListUsecase.handle(req, res);

      res.status(200).json(productListUsecaseResponse).send();
    } catch (err: unknown) {
      if (err instanceof AppError) {
        res.status(err.http_code).json({
          error_message: err.msg,
        });
      }
    }
  }

  async query(req: Request, res: Response) {
    try {
      const productQueryUsecaseResponse = await productQueryUsecase.handle(req, res);

      res.status(200).json(productQueryUsecaseResponse).send();
    } catch (err: unknown) {
      if (err instanceof AppError) {
        res.status(err.http_code).json({
          error_message: err.msg,
        });
      }
    }
  }

  async create(req: Request, res: Response) {
    try {
      const productCreateUsecaseResponse = await productCreateUsecase.handle(req, res);

      res.status(201).json(productCreateUsecaseResponse).send();
    } catch (err: unknown) {
      if (err instanceof AppError) {
        res.status(err.http_code).json({
          error_message: err.msg,
        });
      }
    }
  }

  async update(req: Request, res: Response) {
    res.json({ message: '[TODO]' });
  }

  async delete(req: Request, res: Response) {
    try {
      const productDeleteUsecaseResponse = await productDeleteUsecase.handle(req, res);

      res.status(202).json(productDeleteUsecaseResponse).send();
    } catch (err: unknown) {
      if (err instanceof AppError) {
        res.status(err.http_code).json({
          error_message: err.msg,
        });
      }
    }
  }
}
