import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';
import { IOrderState } from './order.slice';

const selectOrderState = (state: RootState): IOrderState => state.order;

export const selectAllOrders = createSelector(
  [selectOrderState],
  (order) => order.orders
);

export const selectOrderErrorAndLoading = createSelector(
  [selectOrderState],
  (order) => {
    return { error: order.error, loading: order.loading };
  }
);

export const selectSingleOrder = createSelector(
  [selectAllOrders, (_, id: number) => id],
  (orders, id) => {
    return orders.find((order) => order.id === id);
  }
);
