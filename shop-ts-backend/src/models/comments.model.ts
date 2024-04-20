import { AppError, AppErrorCodes } from '../AppError';
import { db } from '../servises/postgres';

import { IComment } from '../types/comments.types';
import {
  isCommentAlreadyExist,
  isRightComment,
  isUserOrdeProcut,
  updateProductRating,
} from '../utils/comment.ustils';
// ________________________________________________________________________________________

export async function getAllUserComments(id: number) {
  return await db('comments').where('userid', id);
}

interface IIdReturning {
  id: number;
}
// ________________________________________________________________________________________

export async function addComment(comment: IComment) {
  if (!isRightComment(comment))
    throw new AppError(
      AppErrorCodes.NoNededBody,
      'Wrong comment information',
      400
    );

  if (await isCommentAlreadyExist(comment))
    throw new AppError(
      AppErrorCodes.CommentAlreadyExist,
      'Comment already exists',
      400
    );

  if (!(await isUserOrdeProcut(comment)))
    throw new AppError(
      AppErrorCodes.UserDontOrderProduct,
      'Product was not ordered',
      400
    );

  const user = await db('usersinfo')
    .where('id', comment.userid)
    .select('firstname', 'lastname');

  const commentId: IIdReturning[] = await db('comments')
    .returning('id')
    .insert({
      ...comment,
      username: `${user[0].firstname} ${user[0].lastname}`,
    });

  await updateProductRating(comment);

  const commentFromDb = await db('comments').where('id', commentId[0].id);
  return commentFromDb[0];
}
// ________________________________________________________________________________________
