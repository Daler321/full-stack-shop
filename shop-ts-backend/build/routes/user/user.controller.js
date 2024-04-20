"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpUpdateUserInfo = exports.httpAddUserInfo = exports.httpGetUserInfo = void 0;
const jwt_token_1 = require("../../servises/jwt-token");
const user_model_1 = require("../../models/user.model");
// ________________________________________________________________________________________
const httpGetUserInfo = async (req, res) => {
    const id = (0, jwt_token_1.verefyTokenJ)(req.headers.authorization.split(' ')[1]);
    const user = await (0, user_model_1.getUserInfo)(Number(id));
    return res.status(200).json(user);
};
exports.httpGetUserInfo = httpGetUserInfo;
// ________________________________________________________________________________________
const httpAddUserInfo = async (req, res) => {
    const id = (0, jwt_token_1.verefyTokenJ)(req.headers.authorization.split(' ')[1]);
    const { userInfo } = req.body;
    const user = await (0, user_model_1.addUserInfo)(Number(id), userInfo);
    return res.status(200).json(user);
};
exports.httpAddUserInfo = httpAddUserInfo;
// ________________________________________________________________________________________
const httpUpdateUserInfo = async (req, res) => {
    const id = (0, jwt_token_1.verefyTokenJ)(req.headers.authorization.split(' ')[1]);
    const { userInfo } = req.body;
    const user = await (0, user_model_1.updateUserInfo)(Number(id), userInfo);
    return res.status(200).json(user);
};
exports.httpUpdateUserInfo = httpUpdateUserInfo;
// ________________________________________________________________________________________
//# sourceMappingURL=user.controller.js.map