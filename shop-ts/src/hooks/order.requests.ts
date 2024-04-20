import { IOrder, IOrderFetch } from '../types/order.interfac';

export async function makeOrderReq(
  token: string,
  order: IOrder[]
): Promise<IOrderFetch> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ order }),
  });

  const orderRes = await response.json();

  if (Object.hasOwn(orderRes, 'errorCode')) throw new Error(orderRes.message);

  return orderRes;
}

export async function getAllOrdersReq(token: string): Promise<IOrderFetch[]> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/order`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const ordersRes = await response.json();

  if (Object.hasOwn(ordersRes, 'errorCode')) throw new Error(ordersRes.message);

  return ordersRes;
}

// export async function getOneOrders(
//   token: string,
//   orderId: number
// ): Promise<IOrderFetch> {
//   const response = await fetch(`${process.env.REACT_APP_BASE_URL}/order/one`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//       orderId: orderId.toString(),
//     },
//   });

//   const orderRes = await response.json();
//   return orderRes;
// }
