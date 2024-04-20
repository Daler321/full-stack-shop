import { createAsyncThunk } from '@reduxjs/toolkit';

import { IOrder } from '../../types/order.interfac';
import { getAllOrdersReq, makeOrderReq } from '../../hooks/order.requests';
import { clearCart } from '../cart/cart.slice';

export const addOrder = createAsyncThunk(
  'order/add',
  async (
    { token, order }: { token: string; order: IOrder[] },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const orderAdded = await makeOrderReq(token, order);
      dispatch(clearCart(null));
      return orderAdded;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  'order/get',
  async (token: string, { rejectWithValue }) => {
    try {
      const orders = await getAllOrdersReq(token);
      return orders;
    } catch (e) {
      if (typeof e === 'string') return rejectWithValue(e);
      else if (e instanceof Error) return rejectWithValue(e.message);
      else return rejectWithValue(e);
    }
  }
);
