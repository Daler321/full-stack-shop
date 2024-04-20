import { IRegistrationData } from '../types/user.interface';

export async function singUpUserReq(
  userData: IRegistrationData
): Promise<string> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/singup`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const token = await response.json();

  if (Object.hasOwn(token, 'errorCode')) throw new Error(token.message);

  return token;
}
