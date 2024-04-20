"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToken = exports.verefyToken = exports.getIdByToken = exports.isAuthTokenExists = exports.getAuthToken = exports.redisConnect = exports.redisClient = void 0;
const redis_1 = require("redis");
const jwt_token_1 = require("./jwt-token");
exports.redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URI || '127.0.0.1',
});
async function redisConnect() {
    return await exports.redisClient.connect();
}
exports.redisConnect = redisConnect;
async function getAuthToken(userid) {
    const token = (0, jwt_token_1.signToken)(userid);
    await exports.redisClient.set(token, userid);
    await exports.redisClient.expire(token, 60 * 60 * 24 * 2);
    return token;
}
exports.getAuthToken = getAuthToken;
async function isAuthTokenExists(token) {
    const isExists = await exports.redisClient.exists(token);
    return Boolean(isExists);
}
exports.isAuthTokenExists = isAuthTokenExists;
async function getIdByToken(token) {
    const id = await exports.redisClient.get(token);
    return id;
}
exports.getIdByToken = getIdByToken;
async function verefyToken(token, id) {
    const trueId = await exports.redisClient.get(token);
    return Number(trueId) === id;
}
exports.verefyToken = verefyToken;
async function deleteToken(token) {
    try {
        await exports.redisClient.del(token);
        return 'sucess';
    }
    catch (e) {
        console.log(e);
        return e;
    }
}
exports.deleteToken = deleteToken;
//# sourceMappingURL=redis.js.map