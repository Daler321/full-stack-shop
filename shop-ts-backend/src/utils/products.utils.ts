import { IGetSkipAndLimit, IProductReturnFn } from '../types/products.types';

export const getSkipAndLimit: IGetSkipAndLimit = (skip, limit) => {
  const skipNum = skip && Number(skip) >= 0 ? Number(skip) : 0;
  const limitNum = limit && Number(limit) >= 0 ? Number(limit) : 15;
  return {
    skipNum,
    limitNum,
  };
};

export const productsReturnFn: IProductReturnFn = (
  products,
  limit,
  skip,
  total
) => {
  return { products, limit, skip, total };
};
