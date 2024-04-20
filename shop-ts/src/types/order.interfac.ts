export interface IOrder {
  productid: number;
  quantity: number;
}

interface IProductInOrder {
  quantity: number;
  price: number;
}

interface IProductsInOrder {
  [key: number]: IProductInOrder;
}

export interface IOrderFetch {
  id: number;
  userid: number;
  price: number;
  isdelivered: boolean;
  date: string;
  products: IProductsInOrder;
}
