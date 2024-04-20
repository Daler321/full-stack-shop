import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';
import { ICartState } from './cart.slice';
import {
  discoundPrice,
  fixRounding,
} from '../../utils/helper-functions/helper-functions';

const selectAppState = (state: RootState): ICartState => state.cart;

export const selectCartItems = createSelector(
  [selectAppState],
  (cart) => cart.items
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  fixRounding(
    cartItems.reduce(
      (total, cartItem) =>
        total +
        cartItem.quantity *
          Number(discoundPrice(cartItem.price, cartItem.discountpercentage)),
      0
    ),
    2
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const isItemInCart = createSelector(
  [selectCartItems, (_, id: number) => id],
  (cartItems = [], id) => cartItems.find((it) => it.id === id)
);
