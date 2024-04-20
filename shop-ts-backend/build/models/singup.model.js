"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenForNewUser = exports.registerUser = void 0;
const bcryptjs_1 = require("bcryptjs");
const postgres_1 = require("../servises/postgres");
const redis_1 = require("../servises/redis");
const AppError_1 = require("../AppError");
// ________________________________________________________________________________________
async function registerUser(username, email, password) {
    try {
        await (0, postgres_1.db)('users').insert({
            username,
            email,
            password: (0, bcryptjs_1.hashSync)(password),
        });
    }
    catch (e) {
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.RegisterFaild, 'User alredy exists', 400);
    }
}
exports.registerUser = registerUser;
// ________________________________________________________________________________________
async function getTokenForNewUser(username) {
    const user = await (0, postgres_1.db)('users').where('username', username);
    const token = await (0, redis_1.getAuthToken)(user[0].id);
    return token;
}
exports.getTokenForNewUser = getTokenForNewUser;
// ________________________________________________________________________________________
//# sourceMappingURL=singup.model.js.map