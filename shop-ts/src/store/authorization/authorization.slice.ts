import { createSlice } from '@reduxjs/toolkit';
import {
  exitUser,
  getUserId,
  logInUser,
  singUpUser,
} from './authorization.thunk';

export interface IAuthState {
  id: number | null;
  token: string | null;
  error: any;
  loading: boolean;
}

const AUTH_STATE: IAuthState = {
  id: null,
  token: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_STATE,
  reducers: {
    // clearAuthState(state) {
    //   state.token = null;
    //   state.id = null;
    //   state.error = null;
    // },
    resetAuthError(state) {
      state.error = null;
    },
    getTokenFromLocalStorage(state) {
      const token = localStorage.getItem('token');
      if (token) state.token = token;
      else state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // __________________________________________________________________________________________________________________
    builder.addCase(getUserId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserId.fulfilled, (state, action) => {
      state.loading = false;
      state.id = action.payload;
    });
    builder.addCase(getUserId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.id = null;
      localStorage.removeItem('token');
    });
    // __________________________________________________________________________________________________________________

    builder.addCase(exitUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(exitUser.fulfilled, (state, action) => {
      localStorage.removeItem('token');
      state.loading = false;
      state.token = null;
      state.id = null;
    });
    builder.addCase(exitUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.id = null;
      localStorage.removeItem('token');
    });
    // __________________________________________________________________________________________________________________

    builder.addCase(singUpUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(singUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    });
    builder.addCase(singUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { getTokenFromLocalStorage, resetAuthError } = authSlice.actions;

export const authReducer = authSlice.reducer;
