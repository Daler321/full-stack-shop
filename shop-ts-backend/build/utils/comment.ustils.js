"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductRating = exports.isUserOrdeProcut = exports.isCommentAlreadyExist = exports.isRightComment = void 0;
const postgres_1 = require("../servises/postgres");
const isRightComment = (comment) => {
    if (!comment.rating)
        return false;
    if (!comment.productid)
        return false;
    return true;
};
exports.isRightComment = isRightComment;
const isCommentAlreadyExist = async (comment) => {
    const commentDb = await (0, postgres_1.db)('comments')
        .where('userid', comment.userid)
        .andWhere('productid', comment.productid);
    return Boolean(commentDb.length);
};
exports.isCommentAlreadyExist = isCommentAlreadyExist;
const isUserOrdeProcut = async (comment) => {
    const allUserOrders = await (0, postgres_1.db)('orders').where('userid', comment.userid);
    const isOrdderWithItem = allUserOrders.filter((order) => {
        return Object.keys(order.products).includes(comment.productid.toString());
    });
    return Boolean(isOrdderWithItem.length);
};
exports.isUserOrdeProcut = isUserOrdeProcut;
const updateProductRating = async (comment) => {
    const newRatingForProduct = await (0, postgres_1.db)('comments')
        .where('productid', comment.productid)
        .avg('rating');
    const newRating = Number(newRatingForProduct[0].avg.slice(0, 4));
    await (0, postgres_1.db)('products')
        .where('id', comment.productid)
        .update({ rating: newRating });
};
exports.updateProductRating = updateProductRating;
//# sourceMappingURL=comment.ustils.js.map