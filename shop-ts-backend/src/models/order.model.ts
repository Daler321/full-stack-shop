import { AppError, AppErrorCodes } from '../AppError';
import { db } from '../servises/postgres';

import { IOrderProduct } from '../types/order.types';
import { isUserExists } from '../utils/user.ustils';
import {
  isWrongOrderData,
  itemsNotInStock,
  orderHandler,
} from '../utils/orders.utils';
// ________________________________________________________________________________________

export async function makeOrder(id: number, order: IOrderProduct[]) {
  if (!(await isUserExists(id)))
    throw new AppError(
      AppErrorCodes.UserInfoNotExists,
      'Not user information',
      400
    );

  if (isWrongOrderData(order))
    throw new AppError(AppErrorCodes.NoNededBody, 'Worng order data', 400);

  const productsNotStock = await itemsNotInStock(order);
  if (productsNotStock.length)
    throw new AppError(AppErrorCodes.NotStckProduct, 'No items in stock', 400);

  const orderId = await orderHandler(id, order);
  const orderFromDb = await db('orders').where('id', orderId);
  return orderFromDb[0];
}
// ________________________________________________________________________________________

export async function getUserOrders(id: number) {
  return await db('orders').where('userid', id);
}
// ________________________________________________________________________________________
// await db.schema.createTable('orders', (table) => {
//   table.increments('id').unique().notNullable();
//   table.integer('userId').notNullable();
//   table.float('price').notNullable();
//   table.boolean('isDelivered').notNullable();
//   table.json('products').notNullable();
// });
