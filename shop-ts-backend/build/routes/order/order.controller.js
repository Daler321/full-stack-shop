"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetOrders = exports.httpMakeOrder = void 0;
const AppError_1 = require("../../AppError");
const jwt_token_1 = require("../../servises/jwt-token");
const order_model_1 = require("../../models/order.model");
// ________________________________________________________________________________________
const httpMakeOrder = async (req, res) => {
    const id = (0, jwt_token_1.verefyTokenJ)(req.headers.authorization.split(' ')[1]);
    const { order } = req.body;
    if (!order || !order.length)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'No order', 400);
    const orderMaded = await (0, order_model_1.makeOrder)(Number(id), order);
    return res.status(200).json(orderMaded);
};
exports.httpMakeOrder = httpMakeOrder;
// ________________________________________________________________________________________
const httpGetOrders = async (req, res) => {
    const id = (0, jwt_token_1.verefyTokenJ)(req.headers.authorization.split(' ')[1]);
    const orders = await (0, order_model_1.getUserOrders)(Number(id));
    return res.status(200).json(orders);
};
exports.httpGetOrders = httpGetOrders;
// ________________________________________________________________________________________
//# sourceMappingURL=order.controller.js.map