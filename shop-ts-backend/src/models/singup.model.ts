import { hashSync } from 'bcryptjs';
import { db } from '../servises/postgres';

import { getAuthToken } from '../servises/redis';
import { AppError, AppErrorCodes } from '../AppError';
// ________________________________________________________________________________________

export async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<void> {
  try {
    await db('users').insert({
      username,
      email,
      password: hashSync(password),
    });
  } catch (e) {
    throw new AppError(AppErrorCodes.RegisterFaild, 'User alredy exists', 400);
  }
}
// ________________________________________________________________________________________

export async function getTokenForNewUser(username: string): Promise<string> {
  const user = await db('users').where('username', username);
  const token = await getAuthToken(user[0].id);

  return token;
}
// ________________________________________________________________________________________
