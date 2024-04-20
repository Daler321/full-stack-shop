import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  isSideBarOpen: boolean;
  isCartOpen: boolean;
  isErrorAlert: boolean;
}

const APP_INITIAL_STATE: IAppState = {
  isCartOpen: false,
  isSideBarOpen: false,
  isErrorAlert: false,
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: APP_INITIAL_STATE,
  reducers: {
    sideBarToggle(state) {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    cartToggle(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    openErrorAlert(state) {
      state.isErrorAlert = true;
    },
    closeErrorAlert(state) {
      state.isErrorAlert = false;
    },
    setState(state, action: { payload: IAppState }) {
      state.isCartOpen = action.payload.isCartOpen;
      state.isSideBarOpen = action.payload.isSideBarOpen;
      state.isErrorAlert = action.payload.isErrorAlert;
    },
  },
});

export const {
  cartToggle,
  sideBarToggle,
  openErrorAlert,
  closeErrorAlert,
  setState,
} = appStateSlice.actions;

export const appStateReducer = appStateSlice.reducer;
