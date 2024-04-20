"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRegisterUser = void 0;
const AppError_1 = require("../../AppError");
const singup_model_1 = require("../../models/singup.model");
// ________________________________________________________________________________________
const httpRegisterUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'Empty Fields', 400);
    if (password.length < 6)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'Too Short Password', 400);
    await (0, singup_model_1.registerUser)(username, email, password);
    const token = await (0, singup_model_1.getTokenForNewUser)(username);
    return res.status(200).json(token);
};
exports.httpRegisterUser = httpRegisterUser;
// ________________________________________________________________________________________
//# sourceMappingURL=singup.controller.js.map