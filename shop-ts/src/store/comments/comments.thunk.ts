import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addCommentReq,
  getAllCommentsReq,
} from '../../hooks/comments.requests';
import { ICommentToAdd } from '../../types/comments.api.interface';

export const addComment = createAsyncThunk(
  'comments/add',
  async (
    { token, comment }: { token: string; comment: ICommentToAdd },
    { rejectWithValue }
  ) => {
    try {
      const addedComment = await addCommentReq(token, comment);
      return addedComment;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const getAllComments = createAsyncThunk(
  'comments/get',
  async (token: string, { rejectWithValue }) => {
    try {
      const comments = await getAllCommentsReq(token);
      return comments;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);
