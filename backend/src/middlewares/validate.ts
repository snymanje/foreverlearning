import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import AppError from '../utils/appError';

// Add to boilerplate
function validateRequest<T>(type: ClassType<T>): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    validate(plainToClass(type, req.body), { whitelist: true, forbidNonWhitelisted: true }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
          next(new AppError(message, 400));
        } else {
          next();
        }
      }
    );
  };
}

export default validateRequest;
