import { ITryCatch, ITryCatchMiddleware } from '../types/functions.types';

export const tryCatch: ITryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    return next(error);
  }
};

export const tryCatchMiddleware: ITryCatchMiddleware =
  (middleware) => async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
