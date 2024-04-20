import { combineReducers } from '@reduxjs/toolkit';

import { productsAPI } from './products/products.api';
import { appStateReducer } from './app-state/app-state.slice';
import { cartReducer } from './cart/cart.slice';
import { authReducer } from './authorization/authorization.slice';
import { commentsReducer } from './comments/comments.slice';
import { orderReducer } from './order/order.slice';
import { userReducer } from './user/user.slice';

export const rootReducer = combineReducers({
  appState: appStateReducer,
  cart: cartReducer,
  auth: authReducer,
  comments: commentsReducer,
  order: orderReducer,
  user: userReducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
