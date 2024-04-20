import { IComment } from './comments.api.interface';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  brand: string;
  images: string[];
  rating: number;
  discountpercentage: number;
  orders: number;
}

export interface IProductsFetch {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}

export interface ISingelItemFetch {
  item: IProduct;
  comments: IComment[];
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICategories {
  name: string;
  img: string;
}
