import React from 'react';
import { useParams } from 'react-router-dom';
import { productsAPI } from '../../store/products/products.api';

import Page from '../../components/features/page/page.component';

import { CategoryTitle } from './category-page.styles';

type CategoryRouteParams = {
  name: string;
  page: string;
};

const CategoryPage = () => {
  const { name } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const { page } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const limit = 5;

  const { data, isLoading, error } = productsAPI.useFetchCategoryItemsQuery({
    limit,
    name,
    page: Number(page),
  });

  return (
    <div>
      <CategoryTitle>{name}</CategoryTitle>

      <Page
        route={'category'}
        page={page}
        products={data?.products}
        isLoading={isLoading}
        error={Boolean(error)}
        total={data?.total}
        limit={limit}
        needPopular={true}
        name={name}
      />
    </div>
  );
};

export default CategoryPage;
