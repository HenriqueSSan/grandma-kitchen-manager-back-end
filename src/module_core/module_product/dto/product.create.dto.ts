import z, { ZodError } from 'zod';
import { AppError } from '~/src/infra/core/app-error';
import { DtoContract } from '~/src/infra/core/contracts/_dto-contract';

const schema = z.object({
  name: z.string().min(3, 'Nome do produto ínvalido'),
  qty: z.number().min(1, 'O campo de quantidade deve ter no mínimo 1'),
  qty_minium: z.number().min(1, 'O campo de mínimo de quantidade deve ter no mínimo 1'),
});

export class ProductCreateDto implements DtoContract<z.infer<typeof schema>> {
  constructor(public name: string, public qty: number, public qty_minium: number) {
    this.schema({ name, qty, qty_minium });
  }

  schema(object: z.infer<typeof schema>): void {
    try {
      const result = schema.parse(object);
    } catch (err: unknown) {
      this.formatError(err);
    }
  }

  formatError(err: z.ZodError | unknown): void {
    if (err instanceof ZodError) {
      const errors: Array<{ error_message: string; path: string }> = [];

      z.treeifyError(err, mapper =>
        errors.push({
          error_message: mapper.message,
          path: mapper.path.join('.'),
        }),
      );

      if (typeof errors[0] !== 'undefined') throw AppError.BadRequest(errors[0].error_message);
    }
  }
}
