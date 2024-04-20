export interface IOrderProduct {
  productid: number;
  quantity: number;
}

interface IProductInOrder {
  quantity: number;
  price: number;
}

interface IOrderObject {
  [key: number]: IProductInOrder;
}

export interface IOrder {
  userid: number;
  price: number;
  isdelivered: boolean;
  products: IOrderObject;
}
