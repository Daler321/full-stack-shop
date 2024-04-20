"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tyrCatch_1 = require("../../utils/tyrCatch");
const authUser_1 = require("../../middlewares/authUser");
const user_controller_1 = require("./user.controller");
const userRouter = (0, express_1.Router)();
userRouter.use((0, tyrCatch_1.tryCatchMiddleware)(authUser_1.authUser));
userRouter.get('/', (0, tyrCatch_1.tryCatch)(user_controller_1.httpGetUserInfo));
userRouter.post('/', (0, tyrCatch_1.tryCatch)(user_controller_1.httpAddUserInfo));
userRouter.put('/', (0, tyrCatch_1.tryCatch)(user_controller_1.httpUpdateUserInfo));
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map