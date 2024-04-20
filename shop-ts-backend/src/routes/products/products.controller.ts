import { ICallbackFunction } from '../../types/functions.types';
import {
  IRequestBodyWithProductsIdArray,
  IRequestParmsWithCategory,
  IRequestParmsWithId,
  IRequestQueryWithQ,
  IRequestQueryWithSkipAndLimit,
} from '../../types/request.types';

import { getSkipAndLimit } from '../../utils/products.utils';
import { AppError, AppErrorCodes } from '../../AppError';

import {
  getProducts,
  getCatigories,
  getCategoryItems,
  getFiltredItems,
  getSingleItem,
  getArrayItems,
} from '../../models/products.model';
// ________________________________________________________________________________________

export const httpGetProducts: ICallbackFunction<
  {},
  {},
  {},
  IRequestQueryWithSkipAndLimit
> = async (req, res) => {
  const { skip, limit } = req.query;

  const { skipNum, limitNum } = getSkipAndLimit(skip, limit);

  return res.status(200).json(await getProducts(skipNum, limitNum));
};
// ________________________________________________________________________________________

export const httpGetCatigories: ICallbackFunction<{}, {}, {}, {}> = async (
  req,
  res
) => {
  return res.status(200).json(await getCatigories());
};
// ________________________________________________________________________________________

export const httpGetCategoryItems: ICallbackFunction<
  IRequestParmsWithCategory,
  {},
  {},
  IRequestQueryWithSkipAndLimit
> = async (req, res) => {
  const { category } = req.params;
  const { skip, limit } = req.query;

  const { skipNum, limitNum } = getSkipAndLimit(skip, limit);

  return res
    .status(200)
    .json(await getCategoryItems(category, skipNum, limitNum));
};
// ________________________________________________________________________________________

export const httpGetFiltredItems: ICallbackFunction<
  {},
  {},
  {},
  IRequestQueryWithQ
> = async (req, res) => {
  const { skip, limit, q } = req.query;

  const { skipNum, limitNum } = getSkipAndLimit(skip, limit);

  return res
    .status(200)
    .json(await getFiltredItems(q.toString(), skipNum, limitNum));
};
// ________________________________________________________________________________________

export const httpGetSingleItem: ICallbackFunction<
  IRequestParmsWithId,
  {},
  {},
  {}
> = async (req, res) => {
  const { id } = req.params;

  return res.status(200).json(await getSingleItem(Number(id)));
};
// ________________________________________________________________________________________

export const httpGetItemsArray: ICallbackFunction<
  {},
  {},
  IRequestBodyWithProductsIdArray,
  {}
> = async (req, res) => {
  const { productsId } = req.body;

  if (!productsId)
    throw new AppError(AppErrorCodes.NoNededBody, 'No items ids', 400);

  return res.status(200).json(await getArrayItems(productsId));
};
// ________________________________________________________________________________________
