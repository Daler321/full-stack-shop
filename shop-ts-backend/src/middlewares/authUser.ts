import { AppError, AppErrorCodes } from '../AppError';
import { verefyTokenJ } from '../servises/jwt-token';
import { verefyToken } from '../servises/redis';

import { IMiddleware } from '../types/functions.types';

export const authUser: IMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw new AppError(AppErrorCodes.NoNededHeaders, 'No token', 401);

  const id = verefyTokenJ(token.split(' ')[1]);

  if (!(await verefyToken(token.split(' ')[1], id)))
    throw new AppError(AppErrorCodes.AuthFailed, 'Auth Failed', 401);

  next();
};
