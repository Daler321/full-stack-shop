import React, { ButtonHTMLAttributes, FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  reduceItemInCart,
} from '../../../store/cart/cart.slice';
import { isItemInCart } from '../../../store/cart/cart.selector';
import { IProduct } from '../../../types/products.api.interface';

import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from '../../elements/custom-button/custom-button.component';

import { AddBtn, ConstrolItemContainer } from './add-to-cart-button.style';

type AddToCartButtonProps = {
  item: IProduct | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const AddToCartButton: FC<AddToCartButtonProps> = ({ item, ...otherProps }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => isItemInCart(state, item?.id || 0));

  const addItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (cartItem && item && cartItem.quantity >= item.stock) return;
    dispatch(addItemToCart(item));
  };

  const reduceItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(reduceItemInCart(item));
  };

  if (!cartItem)
    return (
      <AddBtn onClick={addItemHandler} className='btnadd'>
        add
      </AddBtn>
    );

  return (
    <ConstrolItemContainer>
      <CustomButton
        className='btnadd'
        buttonType={BUTTON_TYPE_CLASSES.action}
        color='#ff000099'
        onClick={(e) => reduceItemHandler(e)}
        {...otherProps}
      >
        -
      </CustomButton>
      {cartItem.quantity}
      <CustomButton
        className='btnadd'
        buttonType={BUTTON_TYPE_CLASSES.action}
        color='green'
        onClick={(e) => addItemHandler(e)}
      >
        +
      </CustomButton>
    </ConstrolItemContainer>
  );
};

export default AddToCartButton;
