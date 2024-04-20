import { createSlice } from '@reduxjs/toolkit';

import { ICartItem, IProduct } from '../../types/products.api.interface';

export interface ICartState {
  items: ICartItem[];
}

const CART_STATE: ICartState = {
  items: [],
};

const addCartItem = (
  cartItems: ICartItem[] = [],
  productToAdd: IProduct
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const reduceCartItem = (
  cartItems: ICartItem[] = [],
  productToReduce: IProduct
): ICartItem[] => {
  const newCart = cartItems.filter((item) => {
    if (item.id === productToReduce.id) {
      if (item.quantity - 1 <= 0) {
        return false;
      } else {
        return { ...item, quantity: (item.quantity -= 1) };
      }
    } else {
      return item;
    }
  });

  return newCart;
};

const removeCartItem = (
  cartItems: ICartItem[] = [],
  productToRemove: IProduct
): ICartItem[] => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.items = addCartItem(state.items, action.payload);
    },
    removeItemFromCart(state, action) {
      state.items = removeCartItem(state.items, action.payload);
    },
    reduceItemInCart(state, action) {
      state.items = reduceCartItem(state.items, action.payload);
    },
    clearCart(state, action) {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  reduceItemInCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
