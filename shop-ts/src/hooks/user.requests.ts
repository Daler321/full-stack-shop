import { IUserInfo } from '../types/user.interface';

export async function getUserInfoReq(token: string): Promise<IUserInfo> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const userInfo = await response.json();

  if (Object.hasOwn(userInfo, 'errorCode')) throw new Error(userInfo.message);

  return userInfo;
}

export async function setUserInfoReq(
  token: string,
  userInfo: IUserInfo
): Promise<IUserInfo> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userInfo }),
  });

  const userInfoRes = await response.json();

  if (Object.hasOwn(userInfoRes, 'errorCode'))
    throw new Error(userInfoRes.message);

  return userInfoRes;
}

export async function updateUserInfoReq(
  token: string,
  userInfo: IUserInfo
): Promise<IUserInfo> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userInfo }),
  });

  const userInfoRes = await response.json();

  if (Object.hasOwn(userInfoRes, 'errorCode'))
    throw new Error(userInfoRes.message);

  return userInfoRes;
}
