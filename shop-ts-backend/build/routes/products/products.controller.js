"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetItemsArray = exports.httpGetSingleItem = exports.httpGetFiltredItems = exports.httpGetCategoryItems = exports.httpGetCatigories = exports.httpGetProducts = void 0;
const products_utils_1 = require("../../utils/products.utils");
const AppError_1 = require("../../AppError");
const products_model_1 = require("../../models/products.model");
// ________________________________________________________________________________________
const httpGetProducts = async (req, res) => {
    const { skip, limit } = req.query;
    const { skipNum, limitNum } = (0, products_utils_1.getSkipAndLimit)(skip, limit);
    return res.status(200).json(await (0, products_model_1.getProducts)(skipNum, limitNum));
};
exports.httpGetProducts = httpGetProducts;
// ________________________________________________________________________________________
const httpGetCatigories = async (req, res) => {
    return res.status(200).json(await (0, products_model_1.getCatigories)());
};
exports.httpGetCatigories = httpGetCatigories;
// ________________________________________________________________________________________
const httpGetCategoryItems = async (req, res) => {
    const { category } = req.params;
    const { skip, limit } = req.query;
    const { skipNum, limitNum } = (0, products_utils_1.getSkipAndLimit)(skip, limit);
    return res
        .status(200)
        .json(await (0, products_model_1.getCategoryItems)(category, skipNum, limitNum));
};
exports.httpGetCategoryItems = httpGetCategoryItems;
// ________________________________________________________________________________________
const httpGetFiltredItems = async (req, res) => {
    const { skip, limit, q } = req.query;
    const { skipNum, limitNum } = (0, products_utils_1.getSkipAndLimit)(skip, limit);
    return res
        .status(200)
        .json(await (0, products_model_1.getFiltredItems)(q.toString(), skipNum, limitNum));
};
exports.httpGetFiltredItems = httpGetFiltredItems;
// ________________________________________________________________________________________
const httpGetSingleItem = async (req, res) => {
    const { id } = req.params;
    return res.status(200).json(await (0, products_model_1.getSingleItem)(Number(id)));
};
exports.httpGetSingleItem = httpGetSingleItem;
// ________________________________________________________________________________________
const httpGetItemsArray = async (req, res) => {
    const { productsId } = req.body;
    if (!productsId)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'No items ids', 400);
    return res.status(200).json(await (0, products_model_1.getArrayItems)(productsId));
};
exports.httpGetItemsArray = httpGetItemsArray;
// ________________________________________________________________________________________
//# sourceMappingURL=products.controller.js.map