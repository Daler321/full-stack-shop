"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWrongOrderData = exports.orderHandler = exports.itemsNotInStock = void 0;
const postgres_1 = require("../servises/postgres");
const products_model_1 = require("../models/products.model");
async function itemsNotInStock(order) {
    const productFromDb = await (0, products_model_1.getArrayItems)(order.map((item) => item.productid));
    const ordersNotStock = order.map(({ productid, quantity }) => {
        const dbProduct = productFromDb.find((product) => product.id === productid);
        if (dbProduct.stock < quantity)
            return {
                productid,
                productInStock: dbProduct.stock,
            };
        return null;
    });
    return ordersNotStock.filter((i) => i);
}
exports.itemsNotInStock = itemsNotInStock;
// ________________________________________________________________________________________
function discoundPrice(price, discountPercentage) {
    const disPrice = price * ((100 - discountPercentage) / 100);
    var power = Math.pow(10, 2);
    return Math.round(disPrice * power) / power;
}
// ________________________________________________________________________________________
async function orderHandler(userid, order) {
    const orderObject = {};
    let price = 0;
    const productFromDb = await (0, products_model_1.getArrayItems)(order.map((item) => item.productid));
    for (const item of order) {
        const product = productFromDb.find((product) => product.id === item.productid);
        const itemPrice = discoundPrice(product.price, product.discountpercentage) * item.quantity;
        orderObject[item.productid] = {
            quantity: item.quantity,
            price: itemPrice,
        };
        price += itemPrice;
        await (0, postgres_1.db)('products')
            .where('id', item.productid)
            .update({
            stock: product.stock - item.quantity,
            orders: product.orders + item.quantity,
        });
    }
    const orderInDb = {
        userid,
        price,
        isdelivered: false,
        products: orderObject,
    };
    const orderId = await (0, postgres_1.db)('orders')
        .returning('id')
        .insert(orderInDb);
    return orderId[0].id;
}
exports.orderHandler = orderHandler;
// ________________________________________________________________________________________
function isWrongOrderData(order) {
    const wrongData = order
        .map((item) => {
        if (!item.productid)
            return 1;
        if (!item.quantity)
            return 1;
        return null;
    })
        .filter((i) => i);
    return Boolean(wrongData.length);
}
exports.isWrongOrderData = isWrongOrderData;
//# sourceMappingURL=orders.utils.js.map