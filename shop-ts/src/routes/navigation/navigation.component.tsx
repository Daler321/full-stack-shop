import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  selectIsCartOpen,
  selectIsErrorAlertOpen,
  selectIsSideBarOpen,
} from '../../store/app-state/app-state.selector';
import { AppDispatch } from '../../store/store';
import { setState } from '../../store/app-state/app-state.slice';

import {
  Background,
  HeaderContainer,
  IconContainer,
  MenuBar,
  Title,
} from './navigation.styles';

import SideBar from '../../components/elements/side-bar/side-bar.component';
import CartDropdown from '../../components/elements/cart-dropdown/cart-dropdown.component';
import { ReactComponent as UserIcon } from '../../assets/svg/user-solid.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart-shopping-solid.svg';
import SearchBar from '../../components/elements/search-bar/search-bar.component';
import ErrorAlert from '../../components/elements/error-alert/error-alert.component';

import { selectAuthErrorAndLoading } from '../../store/authorization/authorization.selector';
import { selectUserErrorAndLoading } from '../../store/user/user.selectsor';
import { selectOrderErrorAndLoading } from '../../store/order/order.selector';
import { selectCommentsErrorAndLoading } from '../../store/comments/comments.selector';

import { resetAuthError } from '../../store/authorization/authorization.slice';
import { resetCommentError } from '../../store/comments/comments.slice';
import { resetOrderError } from '../../store/order/order.slice';
import { resetUserError } from '../../store/user/user.slice';
import {
  closeErrorAlert,
  openErrorAlert,
} from '../../store/app-state/app-state.slice';

const Navigation = () => {
  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isErrorAlert = useSelector(selectIsErrorAlertOpen);
  const dispatch = useDispatch<AppDispatch>();
  const sideBarIconRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const nav = useNavigate();

  const [currentError, setCurrentError] = useState('');

  const { error: authError } = useSelector(selectAuthErrorAndLoading);
  const { error: userError } = useSelector(selectUserErrorAndLoading);
  const { error: orderError } = useSelector(selectOrderErrorAndLoading);
  const { error: commentsError } = useSelector(selectCommentsErrorAndLoading);

  function resetErrors() {
    dispatch(resetAuthError());
    dispatch(resetCommentError());
    dispatch(resetOrderError());
    dispatch(resetUserError());
  }

  useEffect(() => {
    if (authError) setCurrentError(authError);
    if (userError) setCurrentError(userError);
    if (orderError) setCurrentError(orderError);
    if (commentsError) setCurrentError(commentsError);

    resetErrors();
    dispatch(openErrorAlert());

    setTimeout(() => {
      dispatch(closeErrorAlert());
    }, 5000);
  }, [authError, userError, orderError, commentsError]);
  useEffect(() => {
    closeSideBarAndCart();
  }, [location]);

  const openBarHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    sideBarIconRef.current?.classList.toggle('change');
    dispatch(
      setState({
        isCartOpen: false,
        isSideBarOpen: !isSideBarOpen,
        isErrorAlert,
      })
    );
  };

  const openCartHandler = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    dispatch(
      setState({ isCartOpen: !isCartOpen, isSideBarOpen: false, isErrorAlert })
    );
    sideBarIconRef.current?.classList.remove('change');
  };

  const closeSideBarAndCart = () => {
    dispatch(
      setState({ isCartOpen: false, isSideBarOpen: false, isErrorAlert: false })
    );
    sideBarIconRef.current?.classList.remove('change');
  };

  return (
    <HeaderContainer onClick={closeSideBarAndCart}>
      {isSideBarOpen && <SideBar />}
      <MenuBar ref={sideBarIconRef} onClick={(e) => openBarHandler(e)}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </MenuBar>
      <Title to={'/'}>Store Name</Title>
      <IconContainer>
        <SearchBar />
        <CartIcon className='icon' onClick={(e) => openCartHandler(e)} />
        <UserIcon className='icon' onClick={() => nav('/profile')} />
      </IconContainer>
      {isCartOpen && <CartDropdown />}

      {(isCartOpen || isSideBarOpen || isErrorAlert) && (
        <Background onClick={closeSideBarAndCart} />
      )}
      {isErrorAlert && <ErrorAlert currentError={currentError} />}
    </HeaderContainer>
  );
};

export default Navigation;
