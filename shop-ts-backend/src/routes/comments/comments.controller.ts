import { ICallbackFunction } from '../../types/functions.types';

import { AppError, AppErrorCodes } from '../../AppError';
import { IComment } from '../../types/comments.types';
import { verefyTokenJ } from '../../servises/jwt-token';

import { getAllUserComments, addComment } from '../../models/comments.model';
// ________________________________________________________________________________________

export const httpGetAllComentsOfUser: ICallbackFunction<
  {},
  {},
  {},
  {}
> = async (req, res) => {
  const id = verefyTokenJ(req.headers.authorization.split(' ')[1]);

  const comments = await getAllUserComments(Number(id));

  return res.status(200).json(comments);
};

// ________________________________________________________________________________________

export const httpAddComment: ICallbackFunction<{}, {}, IComment, {}> = async (
  req,
  res
) => {
  const comment = req.body;

  if (!comment)
    throw new AppError(AppErrorCodes.NoNededBody, 'No comment', 400);

  const addedComment = await addComment(comment);

  return res.status(200).json(addedComment);
};
// ________________________________________________________________________________________
