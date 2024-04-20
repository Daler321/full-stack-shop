"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verefyTokenJ = exports.signToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../AppError");
const signToken = (userid) => {
    const jwtPayload = { userid };
    return (0, jsonwebtoken_1.sign)(jwtPayload, process.env.JWT_SECRET_KEY, { expiresIn: '2 days' });
};
exports.signToken = signToken;
const verefyTokenJ = (token) => {
    try {
        const userid = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET_KEY);
        return userid.userid;
    }
    catch (e) {
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.AuthFailed, 'Token does not exists', 400);
    }
};
exports.verefyTokenJ = verefyTokenJ;
//# sourceMappingURL=jwt-token.js.map