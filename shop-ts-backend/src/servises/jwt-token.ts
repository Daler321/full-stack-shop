import { sign, verify } from 'jsonwebtoken';
import { AppError, AppErrorCodes } from '../AppError';

export const signToken = (userid: number): string => {
  const jwtPayload = { userid };
  return sign(jwtPayload, process.env.JWT_SECRET_KEY, { expiresIn: '2 days' });
};

interface IjwtUserid {
  userid: number;
}

export const verefyTokenJ = (token: string): number => {
  try {
    const userid = verify(token, process.env.JWT_SECRET_KEY);

    return (userid as IjwtUserid).userid;
  } catch (e) {
    throw new AppError(AppErrorCodes.AuthFailed, 'Token does not exists', 400);
  }
};
