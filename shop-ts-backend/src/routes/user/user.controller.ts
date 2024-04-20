import { ICallbackFunction } from '../../types/functions.types';
import { IRequestBodyWithUserInfo } from '../../types/request.types';
import { verefyTokenJ } from '../../servises/jwt-token';

import {
  addUserInfo,
  getUserInfo,
  updateUserInfo,
} from '../../models/user.model';
// ________________________________________________________________________________________

export const httpGetUserInfo: ICallbackFunction<{}, {}, {}, {}> = async (
  req,
  res
) => {
  const id = verefyTokenJ(req.headers.authorization.split(' ')[1]);

  const user = await getUserInfo(Number(id));

  return res.status(200).json(user);
};
// ________________________________________________________________________________________

export const httpAddUserInfo: ICallbackFunction<
  {},
  {},
  IRequestBodyWithUserInfo,
  {}
> = async (req, res) => {
  const id = verefyTokenJ(req.headers.authorization.split(' ')[1]);
  const { userInfo } = req.body;

  const user = await addUserInfo(Number(id), userInfo);

  return res.status(200).json(user);
};
// ________________________________________________________________________________________

export const httpUpdateUserInfo: ICallbackFunction<
  {},
  {},
  IRequestBodyWithUserInfo,
  {}
> = async (req, res) => {
  const id = verefyTokenJ(req.headers.authorization.split(' ')[1]);
  const { userInfo } = req.body;

  const user = await updateUserInfo(Number(id), userInfo);

  return res.status(200).json(user);
};
// ________________________________________________________________________________________
