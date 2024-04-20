import { createClient } from 'redis';

import { signToken } from './jwt-token';

export const redisClient = createClient({
  url: process.env.REDIS_URI || '127.0.0.1',
});

export async function redisConnect() {
  return await redisClient.connect();
}

export async function getAuthToken(userid: number): Promise<string> {
  const token = signToken(userid);
  await redisClient.set(token, userid);
  await redisClient.expire(token, 60 * 60 * 24 * 2);
  return token;
}

export async function isAuthTokenExists(token: string): Promise<boolean> {
  const isExists = await redisClient.exists(token);
  return Boolean(isExists);
}

export async function getIdByToken(token: string): Promise<string> {
  const id = await redisClient.get(token);
  return id;
}

export async function verefyToken(token: string, id: number): Promise<boolean> {
  const trueId = await redisClient.get(token);
  return Number(trueId) === id;
}

export async function deleteToken(token: string): Promise<string> {
  try {
    await redisClient.del(token);
    return 'sucess';
  } catch (e) {
    console.log(e);

    return e;
  }
}
