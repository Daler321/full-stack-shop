import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserInfoReq,
  setUserInfoReq,
  updateUserInfoReq,
} from '../../hooks/user.requests';
import { IUserInfo } from '../../types/user.interface';

interface IUSerInfoReq {
  token: string;
  userInfo: IUserInfo;
}

export const getUserInfo = createAsyncThunk(
  'user/get',
  async (token: string, { rejectWithValue }) => {
    try {
      const userInfo = await getUserInfoReq(token);
      return userInfo;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const setUserInfo = createAsyncThunk(
  'user/add',
  async ({ userInfo, token }: IUSerInfoReq, { rejectWithValue }) => {
    try {
      const userInfoRes = await setUserInfoReq(token, userInfo);
      return userInfoRes;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/update',
  async ({ userInfo, token }: IUSerInfoReq, { rejectWithValue }) => {
    try {
      const userInfoRes = await updateUserInfoReq(token, userInfo);
      return userInfoRes;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);
