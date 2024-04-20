import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppDispatch } from '../../../store/store';
import { addComment } from '../../../store/comments/comments.thunk';
import { selectTokenAndId } from '../../../store/authorization/authorization.selector';
import { selectAllComments } from '../../../store/comments/comments.selector';
import { selectAllOrders } from '../../../store/order/order.selector';
import { productsAPI } from '../../../store/products/products.api';

import OrderDetailsComment from '../../features/order-details-comment/order-details-comment';

import {
  OrderDetailsItemImg,
  OrderDetailsItemImgWithTitleContainer,
  OrderDetailsItemTitleContainer,
} from '../../features/order-details-item/order-details-item.styles';

import {
  CommentWithItemContainer,
  CommentsContainer,
  CommentContainer,
} from './comments.style';

const Comments = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [orderedProductsIds, setOrderedProductsIds] = useState<number[]>([]);
  const { token, id } = useSelector(selectTokenAndId);
  const comments = useSelector(selectAllComments);
  const orders = useSelector(selectAllOrders);

  const [getProcuts, { data: orderedProducts }] =
    productsAPI.useLazyFetchArrayOfItemsQuery();

  useEffect(() => {
    if (orders) {
      const prd = orders.map((order) => {
        return Object.keys(order.products);
      });
      setOrderedProductsIds([...new Set(prd.flat())].map((s) => Number(s)));
    }
  }, [orders]);

  useEffect(() => {
    if (orderedProductsIds.length) {
      getProcuts(orderedProductsIds);
    }
  }, [orderedProductsIds]);

  const addCommentHandler =
    (productid: number) => (body: string, rating: number) => {
      // addCommentTrigger({
      //   id: Number(id),
      //   token: token ? token : '',
      //   comment: {
      //     body,
      //     rating,
      //     productId,
      //     userId: Number(id),
      //   },
      // });
      if (token && id) {
        dispatch(
          addComment({
            token,
            comment: {
              body,
              rating,
              productid,
              userid: id,
            },
          })
        );
      }
    };

  if (!orderedProducts) {
    return <h1>You don't have reviews</h1>;
  }

  return (
    <CommentsContainer>
      {orderedProducts.map((item) => (
        <CommentWithItemContainer key={item.id}>
          <OrderDetailsItemImgWithTitleContainer
            onClick={() => nav(`/product/${item.id}`)}
          >
            <OrderDetailsItemImg src={item.images[0]} alt={item.title} />
            <OrderDetailsItemTitleContainer>
              {item.title}
            </OrderDetailsItemTitleContainer>
          </OrderDetailsItemImgWithTitleContainer>

          <CommentContainer>
            <OrderDetailsComment
              comment={
                comments
                  ? comments.filter((c) => c.productid === item.id)[0]
                  : null
              }
              addComment={addCommentHandler(item.id)}
            />
          </CommentContainer>
        </CommentWithItemContainer>
      ))}
    </CommentsContainer>
  );
};

export default Comments;
