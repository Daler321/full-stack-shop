"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tyrCatch_1 = require("../../utils/tyrCatch");
const authUser_1 = require("../../middlewares/authUser");
const comments_controller_1 = require("./comments.controller");
const commentsRouter = (0, express_1.Router)();
commentsRouter.use((0, tyrCatch_1.tryCatchMiddleware)(authUser_1.authUser));
commentsRouter.get('/', (0, tyrCatch_1.tryCatch)(comments_controller_1.httpGetAllComentsOfUser));
commentsRouter.post('/', (0, tyrCatch_1.tryCatch)(comments_controller_1.httpAddComment));
exports.default = commentsRouter;
//# sourceMappingURL=comments.routerr.js.map