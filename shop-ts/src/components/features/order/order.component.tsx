import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IOrderFetch } from '../../../types/order.interfac';

import { OrderContainder, OrderInfo } from './order.styles';

interface IOrderProps {
  order: IOrderFetch;
}

const Order: FC<IOrderProps> = ({ order }) => {
  const nav = useNavigate();

  const navToOrder = () => nav(`/order/${order.id}`);

  return (
    <OrderContainder>
      <span>{order.date.slice(0, 10)}</span>
      <span>${order.price}</span>
      <span>{order.isdelivered ? 'Order Dilivered' : 'Order on the way'}</span>
      <OrderInfo onClick={navToOrder}>More about order</OrderInfo>
    </OrderContainder>
  );
};

export default Order;
