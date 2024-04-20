import { db } from '../servises/postgres';
import { IComment } from '../types/comments.types';
import { IOrder } from '../types/order.types';

export const isRightComment = (comment: IComment): boolean => {
  if (!comment.rating) return false;
  if (!comment.productid) return false;
  return true;
};

export const isCommentAlreadyExist = async (
  comment: IComment
): Promise<boolean> => {
  const commentDb = await db('comments')
    .where('userid', comment.userid)
    .andWhere('productid', comment.productid);
  return Boolean(commentDb.length);
};

export const isUserOrdeProcut = async (comment: IComment): Promise<boolean> => {
  const allUserOrders: IOrder[] = await db('orders').where(
    'userid',
    comment.userid
  );
  const isOrdderWithItem = allUserOrders.filter((order) => {
    return Object.keys(order.products).includes(comment.productid.toString());
  });
  return Boolean(isOrdderWithItem.length);
};

export const updateProductRating = async (comment: IComment): Promise<void> => {
  const newRatingForProduct = await db('comments')
    .where('productid', comment.productid)
    .avg('rating');

  const newRating = Number(newRatingForProduct[0].avg.slice(0, 4));

  await db('products')
    .where('id', comment.productid)
    .update({ rating: newRating });
};
