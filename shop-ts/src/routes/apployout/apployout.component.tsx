import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../home-page/home-page.component';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { getTokenFromLocalStorage } from '../../store/authorization/authorization.slice';
import { getUserId } from '../../store/authorization/authorization.thunk';

const ProductPageLazy = lazy(
  () => import('../products-page/products-page.component')
);
const CategoryPageLazy = lazy(
  () => import('../category-page/category-page.component')
);
const CategoriesPageLazy = lazy(
  () => import('../categories-page/categories-page.component')
);
const CheckoutPageLazy = lazy(
  () => import('../checkout-page/checkout-page.component')
);
const ItemPageLazy = lazy(() => import('../item-page/item-page.component'));
const SearchPageLazy = lazy(() => import('../search-page/search-page'));
const LogInPageLazy = lazy(
  () => import('../log-in-page/log-in-page.component')
);
const SingUpPageLazy = lazy(
  () => import('../sing-up-page/sing-up-page.component')
);
const ProfilePageLazy = lazy(
  () => import('../profile-page/profile-page.component')
);
const OrderPageLazy = lazy(
  () => import('../order-details-page/order-details-page.component')
);

function AppLoyout() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getTokenFromLocalStorage());
      dispatch(getUserId(token));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path='/products/:page'
          element={
            <Suspense fallback={<>Loading...</>}>
              <ProductPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/product/:id'
          element={
            <Suspense fallback={<>Loading...</>}>
              <ItemPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/category/:name/:page'
          element={
            <Suspense fallback={<>Loading...</>}>
              <CategoryPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/category'
          element={
            <Suspense fallback={<>Loading...</>}>
              <CategoriesPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/search/:query/:page'
          element={
            <Suspense fallback={<>Loading...</>}>
              <SearchPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/checkout'
          element={
            <Suspense fallback={<>Loading...</>}>
              <CheckoutPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/profile'
          element={
            <Suspense fallback={<>Loading...</>}>
              <ProfilePageLazy />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<>Loading...</>}>
              <LogInPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/singup'
          element={
            <Suspense fallback={<>Loading...</>}>
              <SingUpPageLazy />
            </Suspense>
          }
        />
        <Route
          path='/order/:orderId'
          element={
            <Suspense fallback={<>Loading...</>}>
              <OrderPageLazy />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default AppLoyout;
