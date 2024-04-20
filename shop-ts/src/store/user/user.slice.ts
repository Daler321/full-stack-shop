import { createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types/user.interface';
import { getUserInfo, setUserInfo, updateUserInfo } from './user.thunk';

export interface IUserState {
  userInfo: IUserInfo | null;
  loading: boolean;
  error: any;
}

const USER_INITIAL_STATE: IUserState = {
  userInfo: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    resetUserError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, acton) => {
      state.loading = false;
      state.userInfo = acton.payload;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(setUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setUserInfo.fulfilled, (state, acton) => {
      state.loading = false;
      state.userInfo = acton.payload;
    });
    builder.addCase(setUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, acton) => {
      state.loading = false;
      state.userInfo = acton.payload;
    });
    builder.addCase(updateUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;

export const { resetUserError } = userSlice.actions;
