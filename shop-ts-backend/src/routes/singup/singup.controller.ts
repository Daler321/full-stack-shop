import { ICallbackFunction } from '../../types/functions.types';
import { IRequestBodyWithRegisterInformation } from '../../types/request.types';
import { AppError, AppErrorCodes } from '../../AppError';

import { registerUser, getTokenForNewUser } from '../../models/singup.model';
// ________________________________________________________________________________________

export const httpRegisterUser: ICallbackFunction<
  {},
  {},
  IRequestBodyWithRegisterInformation,
  {}
> = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    throw new AppError(AppErrorCodes.NoNededBody, 'Empty Fields', 400);

  if (password.length < 6)
    throw new AppError(AppErrorCodes.NoNededBody, 'Too Short Password', 400);

  await registerUser(username, email, password);

  const token = await getTokenForNewUser(username);

  return res.status(200).json(token);
};
// ________________________________________________________________________________________
