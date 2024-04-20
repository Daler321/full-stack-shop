"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInfo = exports.addUserInfo = exports.getUserInfo = void 0;
const AppError_1 = require("../AppError");
const postgres_1 = require("../servises/postgres");
const user_ustils_1 = require("../utils/user.ustils");
const defaultUserInfo = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    address: {
        county: '',
        city: '',
        street: '',
        building: '',
        fulladdress: '',
        postalcode: '',
    },
};
// ________________________________________________________________________________________
async function getUserInfo(id) {
    const user = await (0, postgres_1.db)('usersinfo').where('id', id);
    if (!user.length)
        return defaultUserInfo;
    return user[0];
}
exports.getUserInfo = getUserInfo;
// ________________________________________________________________________________________
async function addUserInfo(id, userInfo) {
    if (await (0, user_ustils_1.isUserExists)(id))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.UserInfoAlreadyExists, 'Information already exists', 400);
    if (!(0, user_ustils_1.isRightUserInfo)(userInfo))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'Not Full User Information', 400);
    await (0, postgres_1.db)('usersinfo').insert({ ...userInfo, id });
    const user = await (0, postgres_1.db)('usersinfo').where('id', id);
    return user[0];
}
exports.addUserInfo = addUserInfo;
// ________________________________________________________________________________________
async function updateUserInfo(id, userInfo) {
    if (!(await (0, user_ustils_1.isUserExists)(id)))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.UserInfoNotExists, 'Information not exists', 400);
    await (0, postgres_1.db)('usersinfo').where('id', id).update(userInfo);
    const user = await (0, postgres_1.db)('usersinfo').where('id', id);
    return user[0];
}
exports.updateUserInfo = updateUserInfo;
// ________________________________________________________________________________________
//# sourceMappingURL=user.model.js.map