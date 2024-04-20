import { IOrderProduct } from './order.types';
import { IUserInfo } from './user.types';

export interface IRequestQueryWithSkipAndLimit {
  skip: string;
  limit: string;
}

export interface IRequestParmsWithCategory {
  category: string;
}

export interface IRequestParmsWithId {
  id: string;
}

export interface IRequestQueryWithQ extends IRequestQueryWithSkipAndLimit {
  q: string;
}

export interface IRequestBodyWithProductsIdArray {
  productsId: number[];
}

export interface IRequestBodyWithUserInfo {
  userInfo: IUserInfo;
}

export interface IRequestBodyWithRegisterInformation {
  email: string;
  username: string;
  password: string;
}

export interface IRequestBodyWithOrder {
  order: IOrderProduct[];
}

export interface IRequestBodyWithLoginInfo {
  email: string;
  password: string;
}
