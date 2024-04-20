"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errorHandler_1 = require("../middlewares/errorHandler");
const products_router_1 = __importDefault(require("./products/products.router"));
const singup_router_1 = __importDefault(require("./singup/singup.router"));
const login_router_1 = __importDefault(require("./login/login.router"));
const user_router_1 = __importDefault(require("./user/user.router"));
const order_router_1 = __importDefault(require("./order/order.router"));
const comments_routerr_1 = __importDefault(require("./comments/comments.routerr"));
// ________________________________________________________________________________________
const api = (0, express_1.Router)();
api.use('/products', products_router_1.default);
api.use('/singup', singup_router_1.default);
api.use('/login', login_router_1.default);
api.use('/user', user_router_1.default);
api.use('/order', order_router_1.default);
api.use('/comments', comments_routerr_1.default);
api.use(errorHandler_1.errorHandler);
exports.default = api;
//# sourceMappingURL=api.js.map