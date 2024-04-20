import { ICallbackFunction } from '../../types/functions.types';
import { IRequestBodyWithLoginInfo } from '../../types/request.types';
import { AppError, AppErrorCodes } from '../../AppError';

import { loginByAuthToken, logIn, exitUser } from '../../models/login.model';
// ________________________________________________________________________________________

export const httpLogInUser: ICallbackFunction<
  {},
  {},
  IRequestBodyWithLoginInfo,
  {}
> = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new AppError(AppErrorCodes.NoNededBody, 'No email or password', 400);

  const token = await logIn(email, password);

  return res.status(200).json(token);
};
// ________________________________________________________________________________________

export const httpLoginByAuthToken: ICallbackFunction<{}, {}, {}, {}> = async (
  req,
  res
) => {
  const token = req.headers.authorization;

  if (!token) throw new AppError(AppErrorCodes.NoNededHeaders, 'No token', 400);

  const id = await loginByAuthToken(token.split(' ')[1]);

  return res.status(200).json(id);
};
// ________________________________________________________________________________________

export const httpExit: ICallbackFunction<{}, {}, {}, {}> = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) throw new AppError(AppErrorCodes.NoNededHeaders, 'No token', 400);

  const result = await exitUser(token.split(' ')[1]);

  return res.status(200).json(result);
};
// ________________________________________________________________________________________
