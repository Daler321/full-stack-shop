"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tyrCatch_1 = require("../../utils/tyrCatch");
const products_controller_1 = require("./products.controller");
const productsRouter = (0, express_1.Router)();
productsRouter.get('/', (0, tyrCatch_1.tryCatch)(products_controller_1.httpGetProducts));
productsRouter.get('/categories', (0, tyrCatch_1.tryCatch)(products_controller_1.httpGetCatigories));
productsRouter.get('/categories/:category', (0, tyrCatch_1.tryCatch)(products_controller_1.httpGetCategoryItems));
productsRouter.get('/search', (0, tyrCatch_1.tryCatch)(products_controller_1.httpGetFiltredItems));
productsRouter.get('/item/:id', (0, tyrCatch_1.tryCatch)(products_controller_1.httpGetSingleItem));
productsRouter.post('/itemsarray', (0, tyrCatch_1.tryCatch)(products_controller_1.httpGetItemsArray));
exports.default = productsRouter;
//# sourceMappingURL=products.router.js.map