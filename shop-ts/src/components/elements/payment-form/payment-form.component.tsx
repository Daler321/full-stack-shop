import React, { FormEvent, useState, useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartTotal } from '../../../store/cart/cart.selector';
import { IOrder } from '../../../types/order.interfac';

import { BUTTON_TYPE_CLASSES } from '../custom-button/custom-button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.style';
import { selectTokenAndId } from '../../../store/authorization/authorization.selector';
import { AppDispatch } from '../../../store/store';
import { addOrder } from '../../../store/order/order.thunk';
import { selectOrderErrorAndLoading } from '../../../store/order/order.selector';

interface IPaymentFormProps {
  productsToOrder: IOrder[];
}

const PaymentForm: FC<IPaymentFormProps> = ({ productsToOrder }) => {
  const { id, token } = useSelector(selectTokenAndId);
  const dispatch = useDispatch<AppDispatch>();

  const orderHandler = () => {
    if (!id || !token) return;

    dispatch(addOrder({ token, order: productsToOrder }));
  };

  //

  // const stripe = useStripe();
  // const elements = useElements();
  const amount = useSelector(selectCartTotal);
  // const currentUser = useSelector(selectCurrentUser);
  const [isProccesingPayment, setIsProccesingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!stripe || !elements) return;

    setIsProccesingPayment(true);
    orderHandler();

    setInterval(() => setIsProccesingPayment(false), 5000);

    // const response = await fetch('/.netlify/functions/create-payment-intent', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ amount: amount * 100 }),
    // }).then((res) => res.json());

    // const {
    //   paymentIntent: { client_secret },
    // } = response;

    // const cardDetails = elements.getElement(CardElement);

    // if (cardDetails === null) return;

    // const paymentResult = await stripe.confirmCardPayment(client_secret, {
    //   payment_method: {
    //     card: cardDetails,
    //     billing_details: {
    //       name: currentUser ? currentUser.displayName : 'Guest',
    //     },
    //   },
    // });

    // setIsProccesingPayment(false);

    // if (paymentResult.error) {
    //   alert(paymentResult.error);
    // } else {
    //   if (paymentResult.paymentIntent.status === 'succeeded') {
    //     alert('Payment Successful');
    //   }
    // }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        {/* <CardElement /> */}
        <PaymentButton
          isLoading={isProccesingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
