import { SerializedError, createAsyncThunk } from '@reduxjs/toolkit';

import { IRegistrationData, ISingInData } from '../../types/user.interface';
import {
  exitUserReq,
  getIdByTokenReq,
  logInUserReq,
} from '../../hooks/login.requests';
import { singUpUserReq } from '../../hooks/singup.requests';

export const logInUser = createAsyncThunk(
  'auth/login',
  async ({ password, usernameOrEmail }: ISingInData, { rejectWithValue }) => {
    try {
      const token = await logInUserReq({ usernameOrEmail, password });
      return token;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const getUserId = createAsyncThunk(
  'auth/id',
  async (token: string, { rejectWithValue }) => {
    try {
      const id = await getIdByTokenReq(token);
      return id;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const exitUser = createAsyncThunk(
  'auth/exit',
  async (token: string, { rejectWithValue }) => {
    try {
      const result = await exitUserReq(token);
      return result;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const singUpUser = createAsyncThunk(
  'auth/singup',
  async (userData: IRegistrationData, { rejectWithValue }) => {
    try {
      const token = await singUpUserReq(userData);
      return token;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);
