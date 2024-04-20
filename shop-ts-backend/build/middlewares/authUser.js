"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const AppError_1 = require("../AppError");
const jwt_token_1 = require("../servises/jwt-token");
const redis_1 = require("../servises/redis");
const authUser = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededHeaders, 'No token', 401);
    const id = (0, jwt_token_1.verefyTokenJ)(token.split(' ')[1]);
    if (!(await (0, redis_1.verefyToken)(token.split(' ')[1], id)))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.AuthFailed, 'Auth Failed', 401);
    next();
};
exports.authUser = authUser;
//# sourceMappingURL=authUser.js.map