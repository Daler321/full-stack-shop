"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.getAllUserComments = void 0;
const AppError_1 = require("../AppError");
const postgres_1 = require("../servises/postgres");
const comment_ustils_1 = require("../utils/comment.ustils");
// ________________________________________________________________________________________
async function getAllUserComments(id) {
    return await (0, postgres_1.db)('comments').where('userid', id);
}
exports.getAllUserComments = getAllUserComments;
// ________________________________________________________________________________________
async function addComment(comment) {
    if (!(0, comment_ustils_1.isRightComment)(comment))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.NoNededBody, 'Wrong comment information', 400);
    if (await (0, comment_ustils_1.isCommentAlreadyExist)(comment))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.CommentAlreadyExist, 'Comment already exists', 400);
    if (!(await (0, comment_ustils_1.isUserOrdeProcut)(comment)))
        throw new AppError_1.AppError(AppError_1.AppErrorCodes.UserDontOrderProduct, 'Product was not ordered', 400);
    const user = await (0, postgres_1.db)('usersinfo')
        .where('id', comment.userid)
        .select('firstname', 'lastname');
    const commentId = await (0, postgres_1.db)('comments')
        .returning('id')
        .insert({
        ...comment,
        username: `${user[0].firstname} ${user[0].lastname}`,
    });
    await (0, comment_ustils_1.updateProductRating)(comment);
    const commentFromDb = await (0, postgres_1.db)('comments').where('id', commentId[0].id);
    return commentFromDb[0];
}
exports.addComment = addComment;
// ________________________________________________________________________________________
//# sourceMappingURL=comments.model.js.map