import { ICommentFormDb } from './comments.types';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountpercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  orders: number;
  images: string[];
}

export interface IReturnPrducts {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}

export interface IReturnSingleItem {
  item: IProduct;
  comments: ICommentFormDb[];
}

export interface ICategory {
  name: string;
  img: string;
}

export type IGetSkipAndLimit = (
  skip: string,
  limit: string
) => { skipNum: number; limitNum: number };

export type IProductReturnFn = (
  products: IProduct[],
  limit: number,
  skip: number,
  total: number
) => IReturnPrducts;
