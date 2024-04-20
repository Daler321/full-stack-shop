import { ISingInData } from '../types/user.interface';

export async function logInUserReq({
  usernameOrEmail,
  password,
}: ISingInData): Promise<string> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: usernameOrEmail,
      password: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const token = await response.json();

  if (Object.hasOwn(token, 'errorCode')) throw new Error(token.message);

  return token;
}

export async function getIdByTokenReq(token: string): Promise<number> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const id = await response.json();

  if (Object.hasOwn(id, 'errorCode')) throw new Error(id.message);

  return id;
}

export async function exitUserReq(token: string): Promise<boolean> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login/exit`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (Object.hasOwn(result, 'errorCode')) throw new Error(result.message);

  return result;
}
