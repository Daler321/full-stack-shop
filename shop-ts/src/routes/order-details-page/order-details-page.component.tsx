import React, { useEffect, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { productsAPI } from '../../store/products/products.api';
import { getAllOrders } from '../../store/order/order.thunk';
import { AppDispatch } from '../../store/store';
import { selectTokenAndId } from '../../store/authorization/authorization.selector';
import {
  selectAllOrders,
  selectSingleOrder,
} from '../../store/order/order.selector';

import OrderDetailsItem from '../../components/features/order-details-item/order-details-item.component';

import {
  OrderDetailsBackground,
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderDetailsHeaderElement,
  OrderDetailsItems,
  OrderDetailsDelivered,
  CloseBtn,
  ClodeIcon,
  Bold,
} from './order-details-page.styles';

type CategoryRouteParams = {
  orderId: string;
};

const OrderDetailsPage = () => {
  const { orderId } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector(selectTokenAndId);
  const orders = useSelector(selectAllOrders);
  const order = useSelector((state) =>
    selectSingleOrder(state, Number(orderId))
  );

  useEffect(() => {
    if (!token) return nav('/login');
    if (!orders.length) dispatch(getAllOrders(token));
  }, []);

  const [getProducts, { data, isLoading }] =
    productsAPI.useLazyFetchArrayOfItemsQuery();

  useEffect(() => {
    if (order) {
      const productsId = Object.keys(order.products).map((id) => Number(id));
      getProducts(productsId);
    }
  }, [order]);

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const goBack = (e: MouseEvent<HTMLDivElement | SVGSVGElement>) => {
    nav(-1);
  };

  if (!order) return <h1>No order</h1>;

  return (
    <OrderDetailsBackground onClick={goBack}>
      <OrderDetailsContainer onClick={stopPropagation}>
        <CloseBtn>
          Tap outside to exit
          <ClodeIcon onClick={goBack} />
        </CloseBtn>
        <OrderDetailsHeader>
          <OrderDetailsHeaderElement>
            <Bold>Date</Bold>
            <span>{order.date.slice(0, 10)}</span>
          </OrderDetailsHeaderElement>
          <OrderDetailsHeaderElement>
            <Bold>Total Price</Bold>
            <span>${order.price}</span>
          </OrderDetailsHeaderElement>
        </OrderDetailsHeader>
        <OrderDetailsHeader>
          <OrderDetailsHeaderElement>
            <Bold>Products</Bold>
          </OrderDetailsHeaderElement>
          <OrderDetailsHeaderElement>
            <Bold>Price</Bold>
          </OrderDetailsHeaderElement>
          <OrderDetailsHeaderElement>
            <Bold>Quantity</Bold>
          </OrderDetailsHeaderElement>
          <OrderDetailsHeaderElement>
            <Bold>Review</Bold>
          </OrderDetailsHeaderElement>
        </OrderDetailsHeader>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <OrderDetailsItems>
            {data?.map((item) => (
              <OrderDetailsItem
                key={item.id}
                item={item}
                price={order.products[item.id].price}
                quantity={order.products[item.id].quantity}
              />
            ))}
          </OrderDetailsItems>
        )}
        <OrderDetailsDelivered>
          Delivery status:{' '}
          <Bold>{order.isdelivered ? 'delivered' : 'on a way'}</Bold>
        </OrderDetailsDelivered>
      </OrderDetailsContainer>
    </OrderDetailsBackground>
  );
};

export default OrderDetailsPage;
