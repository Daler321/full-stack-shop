import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { IOrder } from '../../types/order.interfac';

import CheckoutItem from '../../components/features/checkout-item/checkout-item.component';
import PaymentForm from '../../components/elements/payment-form/payment-form.component';
import LogInButton from '../../components/elements/log-in-button/log-in-button.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout-page.style';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const productsToOrder: IOrder[] = cartItems.map((item) => ({
    productid: item.id,
    quantity: item.quantity,
  }));

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Title</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      {localStorage.getItem('token') ? (
        <PaymentForm productsToOrder={productsToOrder} />
      ) : (
        <LogInButton />
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
