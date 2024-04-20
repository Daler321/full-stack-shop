import { Router } from 'express';

import { tryCatch } from '../../utils/tyrCatch';

import {
  httpGetProducts,
  httpGetCatigories,
  httpGetCategoryItems,
  httpGetFiltredItems,
  httpGetSingleItem,
  httpGetItemsArray,
} from './products.controller';

const productsRouter = Router();

productsRouter.get('/', tryCatch(httpGetProducts));

productsRouter.get('/categories', tryCatch(httpGetCatigories));

productsRouter.get('/categories/:category', tryCatch(httpGetCategoryItems));

productsRouter.get('/search', tryCatch(httpGetFiltredItems));

productsRouter.get('/item/:id', tryCatch(httpGetSingleItem));

productsRouter.post('/itemsarray', tryCatch(httpGetItemsArray));

export default productsRouter;
