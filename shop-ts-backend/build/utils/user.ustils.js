"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserExists = exports.isRightUserInfo = void 0;
const postgres_1 = require("../servises/postgres");
const isRightUserInfo = (userInfo) => {
    if (!userInfo.firstname)
        return false;
    if (!userInfo.lastname)
        return false;
    if (!userInfo.phonenumber)
        return false;
    if (!userInfo.address)
        return false;
    if (!userInfo.address.county)
        return false;
    if (!userInfo.address.city)
        return false;
    if (!userInfo.address.street)
        return false;
    if (!userInfo.address.building)
        return false;
    if (!userInfo.address.fulladdress)
        return false;
    if (!userInfo.address.postalcode)
        return false;
    return true;
};
exports.isRightUserInfo = isRightUserInfo;
const isUserExists = async (id) => {
    const user = await (0, postgres_1.db)('usersinfo').where('id', id);
    return Boolean(user.length);
};
exports.isUserExists = isUserExists;
//# sourceMappingURL=user.ustils.js.map