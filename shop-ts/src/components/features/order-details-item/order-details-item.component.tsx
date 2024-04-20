import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../../types/products.api.interface';

import OrderDetailsComment from '../order-details-comment/order-details-comment';

import {
  OrderDetailsItemContainer,
  OrderDetailsItemImgWithTitleContainer,
  OrderDetailsItemImg,
  OrderDetailsItemTitleContainer,
  OrderDetailsItemElement,
  OrderDetailsItemReview,
  OrderDetailsItemWithCommentContainer,
} from './order-details-item.styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { selectTokenAndId } from '../../../store/authorization/authorization.selector';
import {
  selectAllComments,
  selectSingleComment,
} from '../../../store/comments/comments.selector';
import {
  addComment,
  getAllComments,
} from '../../../store/comments/comments.thunk';

interface IOrderDetailsItem {
  item: IProduct;
  price: number;
  quantity: number;
}

const OrderDetailsItem: FC<IOrderDetailsItem> = ({ item, price, quantity }) => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { token, id } = useSelector(selectTokenAndId);
  const comments = useSelector(selectAllComments);
  const comment = useSelector((state) => selectSingleComment(state, item.id));
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  useEffect(() => {
    if (!token) return nav('/login');
    if (!comments.length) dispatch(getAllComments(token));
  }, []);

  const addCommentHandler = (body: string, rating: number) => {
    if (!token || !id) return;

    dispatch(
      addComment({
        token,
        comment: {
          body,
          rating,
          productid: item.id,
          userid: Number(id),
        },
      })
    );
  };

  const navToItem = () => nav(`/product/${item.id}`);

  return (
    <OrderDetailsItemWithCommentContainer>
      <OrderDetailsItemContainer>
        <OrderDetailsItemImgWithTitleContainer onClick={navToItem}>
          <OrderDetailsItemImg src={item.images[0]} alt={item.title} />
          <OrderDetailsItemTitleContainer>
            {item.title}
          </OrderDetailsItemTitleContainer>
        </OrderDetailsItemImgWithTitleContainer>
        <OrderDetailsItemElement>${price}</OrderDetailsItemElement>
        <OrderDetailsItemElement>{quantity}</OrderDetailsItemElement>
        <OrderDetailsItemReview onClick={() => setIsReviewOpen(!isReviewOpen)}>
          Review
        </OrderDetailsItemReview>
      </OrderDetailsItemContainer>
      {isReviewOpen && (
        <OrderDetailsComment
          comment={comment ? comment : null}
          addComment={addCommentHandler}
        />
      )}
    </OrderDetailsItemWithCommentContainer>
  );
};

export default OrderDetailsItem;
