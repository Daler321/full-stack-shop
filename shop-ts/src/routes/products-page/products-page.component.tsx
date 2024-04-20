import React from 'react';
import { useParams } from 'react-router-dom';

import { productsAPI } from '../../store/products/products.api';

import Page from '../../components/features/page/page.component';

type CategoryRouteParams = {
  page: string;
};

const ProductsPage = () => {
  const { page } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const limit = 20;

  const { data, error, isLoading } = productsAPI.useFetchOnePageQuery({
    page: Number(page),
    limit,
  });

  return (
    <Page
      route={'products'}
      page={page}
      products={data?.products}
      isLoading={isLoading}
      error={Boolean(error)}
      total={data?.total}
      limit={limit}
      needPopular={true}
    />
  );
};

export default ProductsPage;
