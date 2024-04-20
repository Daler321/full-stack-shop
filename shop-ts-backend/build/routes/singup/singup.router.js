"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tyrCatch_1 = require("../../utils/tyrCatch");
const singup_controller_1 = require("./singup.controller");
const singupRouter = (0, express_1.Router)();
singupRouter.post('/', (0, tyrCatch_1.tryCatch)(singup_controller_1.httpRegisterUser));
exports.default = singupRouter;
//# sourceMappingURL=singup.router.js.map