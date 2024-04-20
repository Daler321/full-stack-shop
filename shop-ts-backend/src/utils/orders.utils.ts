import { db } from '../servises/postgres';
import { getArrayItems } from '../models/products.model';
import { IOrderProduct } from '../types/order.types';

export async function itemsNotInStock(order: IOrderProduct[]): Promise<any[]> {
  const productFromDb = await getArrayItems(
    order.map((item) => item.productid)
  );

  const ordersNotStock = order.map(({ productid, quantity }) => {
    const dbProduct = productFromDb.find((product) => product.id === productid);

    if (dbProduct.stock < quantity)
      return {
        productid,
        productInStock: dbProduct.stock,
      };
    return null;
  });

  return ordersNotStock.filter((i) => i);
}
// ________________________________________________________________________________________

function discoundPrice(price: number, discountPercentage: number): number {
  const disPrice = price * ((100 - discountPercentage) / 100);

  var power = Math.pow(10, 2);
  return Math.round(disPrice * power) / power;
}
// ________________________________________________________________________________________

export async function orderHandler(
  userid: number,
  order: IOrderProduct[]
): Promise<number> {
  const orderObject = {};
  let price = 0;
  const productFromDb = await getArrayItems(
    order.map((item) => item.productid)
  );

  for (const item of order) {
    const product = productFromDb.find(
      (product) => product.id === item.productid
    );
    const itemPrice =
      discoundPrice(product.price, product.discountpercentage) * item.quantity;

    orderObject[item.productid] = {
      quantity: item.quantity,
      price: itemPrice,
    };
    price += itemPrice;
    await db('products')
      .where('id', item.productid)
      .update({
        stock: product.stock - item.quantity,
        orders: product.orders + item.quantity,
      });
  }

  const orderInDb = {
    userid,
    price,
    isdelivered: false,
    products: orderObject,
  };

  const orderId: { id: number }[] = await db('orders')
    .returning('id')
    .insert(orderInDb);
  return orderId[0].id;
}
// ________________________________________________________________________________________

export function isWrongOrderData(order: IOrderProduct[]): boolean {
  const wrongData = order
    .map((item) => {
      if (!item.productid) return 1;
      if (!item.quantity) return 1;
      return null;
    })
    .filter((i) => i);

  return Boolean(wrongData.length);
}
