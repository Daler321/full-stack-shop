import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../../store/cart/cart.selector';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../../features/cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.style';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to={'/checkout'}>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
