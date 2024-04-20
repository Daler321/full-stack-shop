import { db } from '../servises/postgres';
import { IUserInfo } from '../types/user.types';

export const isRightUserInfo = (userInfo: IUserInfo): boolean => {
  if (!userInfo.firstname) return false;
  if (!userInfo.lastname) return false;
  if (!userInfo.phonenumber) return false;
  if (!userInfo.address) return false;
  if (!userInfo.address.county) return false;
  if (!userInfo.address.city) return false;
  if (!userInfo.address.street) return false;
  if (!userInfo.address.building) return false;
  if (!userInfo.address.fulladdress) return false;
  if (!userInfo.address.postalcode) return false;
  return true;
};

export const isUserExists = async (id: number): Promise<boolean> => {
  const user = await db('usersinfo').where('id', id);

  return Boolean(user.length);
};
