import { ZodError } from 'zod';

export interface DtoContract<T> {
  schema(object: T): void;
  formatError(err: ZodError | unknown): void;
}
