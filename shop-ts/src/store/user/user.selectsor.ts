import { createSelector } from '@reduxjs/toolkit';
import { IUserState } from './user.slice';
import { RootState } from '../root-reducer';

const selectUserState = (state: RootState): IUserState => state.user;

export const selectUserInfo = createSelector(
  [selectUserState],
  (userState) => userState.userInfo
);

export const selectUserErrorAndLoading = createSelector(
  [selectUserState],
  (userState) => ({
    error: userState.error,
    loading: userState.loading,
  })
);
