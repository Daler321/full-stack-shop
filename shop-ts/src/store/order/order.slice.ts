import { createSlice } from '@reduxjs/toolkit';
import { addOrder, getAllOrders } from './order.thunk';
import { IOrderFetch } from '../../types/order.interfac';

export interface IOrderState {
  orders: IOrderFetch[];
  error: any;
  loading: boolean;
}

const ORDER_INITIAL_STATE: IOrderState = {
  orders: [],
  error: null,
  loading: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState: ORDER_INITIAL_STATE,
  reducers: {
    resetOrderError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // __________________________________________________________________________________________________________________
    builder.addCase(addOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders.push(action.payload);
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const orderReducer = orderSlice.reducer;

export const { resetOrderError } = orderSlice.actions;
