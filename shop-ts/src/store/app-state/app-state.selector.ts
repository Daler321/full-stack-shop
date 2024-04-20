import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';
import { IAppState } from './app-state.slice';

const selectAppState = (state: RootState): IAppState => state.appState;

export const selectIsCartOpen = createSelector(
  [selectAppState],
  (state) => state.isCartOpen
);

export const selectIsSideBarOpen = createSelector(
  [selectAppState],
  (cart) => cart.isSideBarOpen
);

export const selectIsErrorAlertOpen = createSelector(
  [selectAppState],
  (state) => state.isErrorAlert
);
