import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';
import { ICommentsState } from './comments.slice';

const selectCommentsState = (state: RootState): ICommentsState =>
  state.comments;

export const selectAllComments = createSelector(
  [selectCommentsState],
  (comments) => comments.comments
);

export const selectCommentsErrorAndLoading = createSelector(
  [selectCommentsState],
  (comments) => {
    return { error: comments.error, loading: comments.loading };
  }
);

export const selectSingleComment = createSelector(
  [selectAllComments, (_, id: number) => id],
  (comments, id) => {
    return comments.find((comment) => comment.productid === id);
  }
);
