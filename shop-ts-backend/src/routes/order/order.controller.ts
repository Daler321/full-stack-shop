import { IRequestBodyWithOrder } from '../../types/request.types';
import { ICallbackFunction } from '../../types/functions.types';
import { AppError, AppErrorCodes } from '../../AppError';
import { verefyTokenJ } from '../../servises/jwt-token';

import { getUserOrders, makeOrder } from '../../models/order.model';
// ________________________________________________________________________________________

export const httpMakeOrder: ICallbackFunction<
  {},
  {},
  IRequestBodyWithOrder,
  {}
> = async (req, res) => {
  const id = verefyTokenJ(req.headers.authorization.split(' ')[1]);
  const { order } = req.body;

  if (!order || !order.length)
    throw new AppError(AppErrorCodes.NoNededBody, 'No order', 400);

  const orderMaded = await makeOrder(Number(id), order);

  return res.status(200).json(orderMaded);
};
// ________________________________________________________________________________________

export const httpGetOrders: ICallbackFunction<{}, {}, {}, {}> = async (
  req,
  res
) => {
  const id = verefyTokenJ(req.headers.authorization.split(' ')[1]);

  const orders = await getUserOrders(Number(id));

  return res.status(200).json(orders);
};
// ________________________________________________________________________________________
