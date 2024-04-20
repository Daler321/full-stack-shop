import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllOrders } from '../../../store/order/order.selector';

import Order from '../../features/order/order.component';

import { OrdersContainer, OrdersHeader } from './orders.styles';

const Orders = () => {
  const orders = useSelector(selectAllOrders);

  return (
    <OrdersContainer>
      <OrdersHeader>
        <span>Date</span>
        <span>Price</span>
        <span>Delivery Status</span>
        <span>More information</span>
      </OrdersHeader>
      {orders?.map((item, i) => (
        <Order key={i} order={item} />
      ))}
    </OrdersContainer>
  );
};

export default Orders;
