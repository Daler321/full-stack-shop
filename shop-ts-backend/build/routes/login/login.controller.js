"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpExit = exports.httpLoginByAuthToken = exports.httpLogInUser = void 0;
const AppError_1 = require("../../AppError");
const login_model_1 = require("../../models/login.model");
// ________________________________________________________________________________________
const httpLogInUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'No email or password', 400);
    const token = await (0, login_model_1.logIn)(email, password);
    return res.status(200).json(token);
};
exports.httpLogInUser = httpLogInUser;
// ________________________________________________________________________________________
const httpLoginByAuthToken = async (req, res) => {
    const token = req.headers.authorization;
    if (!token)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededHeaders, 'No token', 400);
    const id = await (0, login_model_1.loginByAuthToken)(token.split(' ')[1]);
    return res.status(200).json(id);
};
exports.httpLoginByAuthToken = httpLoginByAuthToken;
// ________________________________________________________________________________________
const httpExit = async (req, res) => {
    const token = req.headers.authorization;
    if (!token)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededHeaders, 'No token', 400);
    const result = await (0, login_model_1.exitUser)(token.split(' ')[1]);
    return res.status(200).json(result);
};
exports.httpExit = httpExit;
// ________________________________________________________________________________________
//# sourceMappingURL=login.controller.js.map