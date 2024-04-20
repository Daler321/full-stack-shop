import { AppError, AppErrorCodes } from '../AppError';
import { db } from '../servises/postgres';
import { IUserInfo } from '../types/user.types';
import { isRightUserInfo, isUserExists } from '../utils/user.ustils';

const defaultUserInfo = {
  firstname: '',
  lastname: '',
  phonenumber: '',
  address: {
    county: '',
    city: '',
    street: '',
    building: '',
    fulladdress: '',
    postalcode: '',
  },
};
// ________________________________________________________________________________________

export async function getUserInfo(id: number) {
  const user = await db('usersinfo').where('id', id);

  if (!user.length) return defaultUserInfo;
  return user[0];
}
// ________________________________________________________________________________________

export async function addUserInfo(id: number, userInfo: IUserInfo) {
  if (await isUserExists(id))
    throw new AppError(
      AppErrorCodes.UserInfoAlreadyExists,
      'Information already exists',
      400
    );

  if (!isRightUserInfo(userInfo))
    throw new AppError(
      AppErrorCodes.NoNededBody,
      'Not Full User Information',
      400
    );

  await db('usersinfo').insert({ ...userInfo, id });

  const user = await db('usersinfo').where('id', id);

  return user[0];
}
// ________________________________________________________________________________________

export async function updateUserInfo(id: number, userInfo: IUserInfo) {
  if (!(await isUserExists(id)))
    throw new AppError(
      AppErrorCodes.UserInfoNotExists,
      'Information not exists',
      400
    );

  await db('usersinfo').where('id', id).update(userInfo);

  const user = await db('usersinfo').where('id', id);

  return user[0];
}
// ________________________________________________________________________________________
