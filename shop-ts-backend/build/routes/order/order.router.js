"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tyrCatch_1 = require("../../utils/tyrCatch");
const authUser_1 = require("../../middlewares/authUser");
const order_controller_1 = require("./order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.use((0, tyrCatch_1.tryCatchMiddleware)(authUser_1.authUser));
orderRouter.post('/', (0, tyrCatch_1.tryCatch)(order_controller_1.httpMakeOrder));
orderRouter.get('/', (0, tyrCatch_1.tryCatch)(order_controller_1.httpGetOrders));
exports.default = orderRouter;
//# sourceMappingURL=order.router.js.map