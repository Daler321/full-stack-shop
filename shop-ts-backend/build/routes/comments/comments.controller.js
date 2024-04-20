"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAddComment = exports.httpGetAllComentsOfUser = void 0;
const AppError_1 = require("../../AppError");
const jwt_token_1 = require("../../servises/jwt-token");
const comments_model_1 = require("../../models/comments.model");
// ________________________________________________________________________________________
const httpGetAllComentsOfUser = async (req, res) => {
    const id = (0, jwt_token_1.verefyTokenJ)(req.headers.authorization.split(' ')[1]);
    const comments = await (0, comments_model_1.getAllUserComments)(Number(id));
    return res.status(200).json(comments);
};
exports.httpGetAllComentsOfUser = httpGetAllComentsOfUser;
// ________________________________________________________________________________________
const httpAddComment = async (req, res) => {
    const comment = req.body;
    if (!comment)
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'No comment', 400);
    const addedComment = await (0, comments_model_1.addComment)(comment);
    return res.status(200).json(addedComment);
};
exports.httpAddComment = httpAddComment;
// ________________________________________________________________________________________
//# sourceMappingURL=comments.controller.js.map