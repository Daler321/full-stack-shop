"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitUser = exports.loginByAuthToken = exports.logIn = void 0;
const bcryptjs_1 = require("bcryptjs");
const postgres_1 = require("../servises/postgres");
const redis_1 = require("../servises/redis");
const AppError_1 = require("../AppError");
const jwt_token_1 = require("../servises/jwt-token");
// ________________________________________________________________________________________
async function logIn(email, passwordSneded) {
    const user = await (0, postgres_1.db)('users')
        .where('email', email)
        .orWhere('username', email);
    if (!user.length)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.WrongEmailOrPassword, 'Wrong Email Or Password', 400);
    const { id, password } = user[0];
    const isRightPassword = (0, bcryptjs_1.compareSync)(passwordSneded, password);
    if (!isRightPassword)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.WrongEmailOrPassword, 'Wrong Email Or Password', 400);
    const token = await (0, redis_1.getAuthToken)(id);
    return token;
}
exports.logIn = logIn;
// ________________________________________________________________________________________
async function loginByAuthToken(token) {
    const isExists = await (0, redis_1.isAuthTokenExists)(token);
    if (!isExists)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.AuthFailed, 'Token Dose Not Exists', 400);
    const id = (0, jwt_token_1.verefyTokenJ)(token);
    return id;
}
exports.loginByAuthToken = loginByAuthToken;
// ________________________________________________________________________________________
async function exitUser(token) {
    const result = await (0, redis_1.deleteToken)(token);
    return Boolean(result);
}
exports.exitUser = exitUser;
// ________________________________________________________________________________________
//# sourceMappingURL=login.model.js.map