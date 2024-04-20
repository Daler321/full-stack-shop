"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatchMiddleware = exports.tryCatch = void 0;
const tryCatch = (controller) => async (req, res, next) => {
    try {
        await controller(req, res);
    }
    catch (error) {
        return next(error);
    }
};
exports.tryCatch = tryCatch;
const tryCatchMiddleware = (middleware) => async (req, res, next) => {
    try {
        await middleware(req, res, next);
    }
    catch (error) {
        return next(error);
    }
};
exports.tryCatchMiddleware = tryCatchMiddleware;
//# sourceMappingURL=tyrCatch.js.map