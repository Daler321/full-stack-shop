"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsReturnFn = exports.getSkipAndLimit = void 0;
const getSkipAndLimit = (skip, limit) => {
    const skipNum = skip && Number(skip) >= 0 ? Number(skip) : 0;
    const limitNum = limit && Number(limit) >= 0 ? Number(limit) : 15;
    return {
        skipNum,
        limitNum,
    };
};
exports.getSkipAndLimit = getSkipAndLimit;
const productsReturnFn = (products, limit, skip, total) => {
    return { products, limit, skip, total };
};
exports.productsReturnFn = productsReturnFn;
//# sourceMappingURL=products.utils.js.map