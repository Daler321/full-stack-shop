"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayItems = exports.getSingleItem = exports.getFiltredItems = exports.getCategoryItems = exports.getCatigories = exports.getProducts = void 0;
const postgres_1 = require("../servises/postgres");
const products_utils_1 = require("../utils/products.utils");
// ________________________________________________________________________________________
async function getProducts(skip, limit) {
    const total = await (0, postgres_1.db)('products').count('id');
    if (!limit)
        return (0, products_utils_1.productsReturnFn)(await (0, postgres_1.db)('products'), limit, skip, Number(total[0].count));
    return (0, products_utils_1.productsReturnFn)(await (0, postgres_1.db)('products').limit(limit).offset(skip), limit, skip, Number(total[0].count));
}
exports.getProducts = getProducts;
// ________________________________________________________________________________________
// await db.schema.createTable('products', function (table) {
//   table.increments('id').unique();
//   table.string('title');
//   table.text('description');
//   table.integer('price');
//   table.float('discountPercentage');
//   table.float('rating');
//   table.integer('stock');
//   table.string('brand');
//   table.string('category');
//   table.specificType('images', 'VARCHAR(255)[]');
// });
// ________________________________________________________________________________________
async function getCatigories() {
    return await (0, postgres_1.db)('categories');
}
exports.getCatigories = getCatigories;
// ________________________________________________________________________________________
async function getCategoryItems(category, skip, limit) {
    const total = await (0, postgres_1.db)('products')
        .where('category', category)
        .count('id');
    if (!limit)
        return (0, products_utils_1.productsReturnFn)(await (0, postgres_1.db)('products').where('category', category), limit, skip, Number(total[0].count));
    return (0, products_utils_1.productsReturnFn)(await (0, postgres_1.db)('products').where('category', category).limit(limit).offset(skip), limit, skip, Number(total[0].count));
}
exports.getCategoryItems = getCategoryItems;
// ________________________________________________________________________________________
async function getFiltredItems(query, skip, limit) {
    const filtredProducts = await (0, postgres_1.db)('products')
        .whereILike('title', `%${query}%`)
        .orWhereILike('description', `%${query}%`)
        .orWhereILike('category', `%${query}%`);
    if (!limit)
        return (0, products_utils_1.productsReturnFn)(filtredProducts, limit, skip, filtredProducts.length);
    return (0, products_utils_1.productsReturnFn)(filtredProducts.slice(skip, skip + limit), limit, skip, filtredProducts.length);
}
exports.getFiltredItems = getFiltredItems;
// ________________________________________________________________________________________
async function getSingleItem(id) {
    const item = await (0, postgres_1.db)('products').where('id', id);
    return {
        item: item[0],
        comments: await (0, postgres_1.db)('comments').where('productid', id),
    };
}
exports.getSingleItem = getSingleItem;
// ________________________________________________________________________________________
async function getArrayItems(itemsId) {
    return await (0, postgres_1.db)('products').whereIn('id', itemsId);
}
exports.getArrayItems = getArrayItems;
// ________________________________________________________________________________________
//# sourceMappingURL=products.model.js.map