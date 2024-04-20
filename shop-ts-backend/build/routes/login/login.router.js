"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tyrCatch_1 = require("../../utils/tyrCatch");
const login_controller_1 = require("./login.controller");
const loginRouter = (0, express_1.Router)();
loginRouter.post('/', (0, tyrCatch_1.tryCatch)(login_controller_1.httpLogInUser));
loginRouter.get('/', (0, tyrCatch_1.tryCatch)(login_controller_1.httpLoginByAuthToken));
loginRouter.get('/exit', (0, tyrCatch_1.tryCatch)(login_controller_1.httpExit));
exports.default = loginRouter;
//# sourceMappingURL=login.router.js.map