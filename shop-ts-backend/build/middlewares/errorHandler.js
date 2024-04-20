"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../AppError");
const errorHandler = (error, req, res, next) => {
    console.log(error);
    if (error instanceof AppError_1.AppError) {
        return res.status(error.statusCode).json({
            errorCode: error.errorCode,
            message: error.message,
        });
    }
    return res.status(500).json({ message: 'Something went wrong' });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map