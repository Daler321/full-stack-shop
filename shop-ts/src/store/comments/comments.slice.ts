import { createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types/comments.api.interface';
import { addComment, getAllComments } from './comments.thunk';

export interface ICommentsState {
  comments: IComment[];
  error: any;
  loading: boolean;
}

const COMMENTS_INITIAL_STATE: ICommentsState = {
  comments: [],
  error: null,
  loading: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: COMMENTS_INITIAL_STATE,
  reducers: {
    resetCommentError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
    builder.addCase(getAllComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // __________________________________________________________________________________________________________________
    builder.addCase(addComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;
      state.comments.push(action.payload);
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { resetCommentError } = commentsSlice.actions;
