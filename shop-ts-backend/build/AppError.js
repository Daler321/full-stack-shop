"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorCodes = exports.AppError = void 0;
class AppError extends Error {
    constructor(errorCode, message, statusCode) {
        super(message);
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
var AppErrorCodes;
(function (AppErrorCodes) {
    AppErrorCodes[AppErrorCodes["NoNededBody"] = 300] = "NoNededBody";
    AppErrorCodes[AppErrorCodes["NoNededParams"] = 301] = "NoNededParams";
    AppErrorCodes[AppErrorCodes["NoNededHeaders"] = 302] = "NoNededHeaders";
    AppErrorCodes[AppErrorCodes["RegisterFaild"] = 310] = "RegisterFaild";
    AppErrorCodes[AppErrorCodes["LogInFaild"] = 311] = "LogInFaild";
    AppErrorCodes[AppErrorCodes["AuthFailed"] = 312] = "AuthFailed";
    AppErrorCodes[AppErrorCodes["WrongEmailOrPassword"] = 313] = "WrongEmailOrPassword";
    AppErrorCodes[AppErrorCodes["UserInfoAlreadyExists"] = 320] = "UserInfoAlreadyExists";
    AppErrorCodes[AppErrorCodes["UserInfoNotExists"] = 321] = "UserInfoNotExists";
    AppErrorCodes[AppErrorCodes["OrderDoesNotExists"] = 330] = "OrderDoesNotExists";
    AppErrorCodes[AppErrorCodes["NotStckProduct"] = 331] = "NotStckProduct";
    AppErrorCodes[AppErrorCodes["CommentAlreadyExist"] = 340] = "CommentAlreadyExist";
    AppErrorCodes[AppErrorCodes["UserDontOrderProduct"] = 341] = "UserDontOrderProduct";
})(AppErrorCodes || (exports.AppErrorCodes = AppErrorCodes = {}));
//# sourceMappingURL=AppError.js.map