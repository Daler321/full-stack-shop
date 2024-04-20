import React, { FC, memo, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import {
  addItemToCart,
  reduceItemInCart,
  removeItemFromCart,
} from '../../../store/cart/cart.slice';
import { ICartItem } from '../../../types/products.api.interface';
import { discoundPrice } from '../../../utils/helper-functions/helper-functions';

import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from '../../elements/custom-button/custom-button.component';

import {
  CartItemContainer,
  ItemDetails,
  NameContainer,
  AdditionalControl,
  QuantityControl,
  DeleteBtn,
} from './cart-item.style';

export type CartItemProps = {
  item: ICartItem;
};

const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const [isOppenedAditionaControl, setIsOppenedAditionaControl] =
    useState(false);
  const { title, images, quantity, price, discountpercentage, stock } = item;
  const dispatch = useDispatch();

  const oppenedAditionaControlHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOppenedAditionaControl(!isOppenedAditionaControl);
  };

  const addItemHandler = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (quantity >= stock) return;
    dispatch(addItemToCart(item));
  };

  const reduceItemHandler = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    dispatch(reduceItemInCart(item));
  };

  const removeItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeItemFromCart(item));
  };

  return (
    <CartItemContainer onClick={(e) => oppenedAditionaControlHandler(e)}>
      {isOppenedAditionaControl && (
        <AdditionalControl>
          <QuantityControl>
            <CustomButton
              buttonType={BUTTON_TYPE_CLASSES.action}
              color='green'
              onClick={(e) => addItemHandler(e)}
            >
              +
            </CustomButton>
            {quantity}
            <CustomButton
              buttonType={BUTTON_TYPE_CLASSES.action}
              color='#ff000099'
              onClick={(e) => reduceItemHandler(e)}
            >
              -
            </CustomButton>
          </QuantityControl>
          <DeleteBtn onClick={(e) => removeItemHandler(e)}>✕</DeleteBtn>
        </AdditionalControl>
      )}
      <img src={images[0]} alt={title} />
      <ItemDetails>
        <NameContainer>{title}</NameContainer>
        <span>
          {quantity} x $
          {(discountpercentage && discoundPrice(price, discountpercentage)) ||
            price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
