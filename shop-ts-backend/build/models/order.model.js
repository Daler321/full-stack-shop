"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserOrders = exports.makeOrder = void 0;
const AppError_1 = require("../AppError");
const postgres_1 = require("../servises/postgres");
const user_ustils_1 = require("../utils/user.ustils");
const orders_utils_1 = require("../utils/orders.utils");
// ________________________________________________________________________________________
async function makeOrder(id, order) {
    if (!(await (0, user_ustils_1.isUserExists)(id)))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.UserInfoNotExists, 'Not user information', 400);
    if ((0, orders_utils_1.isWrongOrderData)(order))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'Worng order data', 400);
    const productsNotStock = await (0, orders_utils_1.itemsNotInStock)(order);
    if (productsNotStock.length)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NotStckProduct, 'No items in stock', 400);
    const orderId = await (0, orders_utils_1.orderHandler)(id, order);
    const orderFromDb = await (0, postgres_1.db)('orders').where('id', orderId);
    return orderFromDb[0];
}
exports.makeOrder = makeOrder;
// ________________________________________________________________________________________
async function getUserOrders(id) {
    return await (0, postgres_1.db)('orders').where('userid', id);
}
exports.getUserOrders = getUserOrders;
// ________________________________________________________________________________________
// await db.schema.createTable('orders', (table) => {
//   table.increments('id').unique().notNullable();
//   table.integer('userId').notNullable();
//   table.float('price').notNullable();
//   table.boolean('isDelivered').notNullable();
//   table.json('products').notNullable();
// });
//# sourceMappingURL=order.model.js.map