import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store/store';
import {
  exitUser,
  getUserId,
} from '../../store/authorization/authorization.thunk';
import { getUserInfo } from '../../store/user/user.thunk';
import { getAllOrders } from '../../store/order/order.thunk';
import { getAllComments } from '../../store/comments/comments.thunk';
import {
  selectAuthErrorAndLoading,
  selectTokenAndId,
} from '../../store/authorization/authorization.selector';

import UserInfoForm from '../../components/elements/user-info-form/user-info-form.component';
import CustomButton from '../../components/elements/custom-button/custom-button.component';
import Comments from '../../components/elements/comments/comments.component';
import Orders from '../../components/elements/orders/orders.component';

import {
  Arrow,
  Chapter,
  ChapterContent,
  ChaptersContainer,
  ExitContainer,
} from './profile-page.styles';

const ProfilePage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const { token, id } = useSelector(selectTokenAndId);
  const { loading } = useSelector(selectAuthErrorAndLoading);

  useEffect(() => {
    if (!token || !localStorage.getItem('token')) nav('/login');
  }, []);

  useEffect(() => {
    if (token && !id) dispatch(getUserId(token));
  }, [token]);

  useEffect(() => {
    if (!localStorage.getItem('token')) return;
    if (id && token) {
      dispatch(getUserInfo(token));
      dispatch(getAllOrders(token));
      dispatch(getAllComments(token));
      return;
    }
  }, [id]);

  const exitHandler = () => {
    if (token) {
      dispatch(exitUser(token));
      nav('/login');
    }
  };

  const openDeliveryHandler = () => {
    setIsDeliveryOpen(!isDeliveryOpen);
    setIsOrdersOpen(false);
    setIsReviewsOpen(false);
  };

  const openOrdersHandler = () => {
    setIsOrdersOpen(!isOrdersOpen);
    setIsDeliveryOpen(false);
    setIsReviewsOpen(false);
  };

  const openReviewsHandler = () => {
    setIsReviewsOpen(!isReviewsOpen);
    setIsOrdersOpen(false);
    setIsDeliveryOpen(false);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <ChaptersContainer>
      <Chapter onClick={openDeliveryHandler}>
        <span>Delivery Information</span>
        <Arrow $isRotate={isDeliveryOpen} />
      </Chapter>
      <ChapterContent $hidden={!isDeliveryOpen}>
        <UserInfoForm />
      </ChapterContent>
      <Chapter onClick={openOrdersHandler}>
        <span>Orders</span>
        <Arrow $isRotate={isOrdersOpen} />
      </Chapter>
      <ChapterContent $hidden={!isOrdersOpen}>
        <Orders />
      </ChapterContent>
      <Chapter onClick={openReviewsHandler}>
        <span>Rreviews</span>
        <Arrow $isRotate={isReviewsOpen} />
      </Chapter>
      <ChapterContent $hidden={!isReviewsOpen}>
        <Comments />
      </ChapterContent>
      <ExitContainer>
        <CustomButton onClick={exitHandler}>Exit</CustomButton>
      </ExitContainer>
    </ChaptersContainer>
  );
};

export default ProfilePage;
