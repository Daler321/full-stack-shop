import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';
import { IAuthState } from './authorization.slice';

const selectAuthState = (state: RootState): IAuthState => state.auth;

export const selectTokenAndId = createSelector([selectAuthState], (auth) => {
  return { id: auth.id, token: auth.token };
});

export const selectAuthErrorAndLoading = createSelector(
  [selectAuthState],
  (auth) => {
    return { error: auth.error, loading: auth.loading };
  }
);
