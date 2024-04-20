import { compareSync } from 'bcryptjs';
import { db } from '../servises/postgres';

import {
  deleteToken,
  getAuthToken,
  isAuthTokenExists,
} from '../servises/redis';
import { AppError, AppErrorCodes } from '../AppError';
import { verefyTokenJ } from '../servises/jwt-token';
// ________________________________________________________________________________________

export async function logIn(
  email: string,
  passwordSneded: string
): Promise<string> {
  const user = await db('users')
    .where('email', email)
    .orWhere('username', email);

  if (!user.length)
    throw new AppError(
      AppErrorCodes.WrongEmailOrPassword,
      'Wrong Email Or Password',
      400
    );

  const { id, password } = user[0];

  const isRightPassword = compareSync(passwordSneded, password);
  if (!isRightPassword)
    throw new AppError(
      AppErrorCodes.WrongEmailOrPassword,
      'Wrong Email Or Password',
      400
    );

  const token = await getAuthToken(id);

  return token;
}
// ________________________________________________________________________________________

export async function loginByAuthToken(token: string): Promise<number> {
  const isExists = await isAuthTokenExists(token);
  if (!isExists)
    throw new AppError(AppErrorCodes.AuthFailed, 'Token Dose Not Exists', 400);

  const id = verefyTokenJ(token);

  return id;
}
// ________________________________________________________________________________________

export async function exitUser(token: string): Promise<boolean> {
  const result = await deleteToken(token);
  return Boolean(result);
}
// ________________________________________________________________________________________
