import React from 'react';
import { useParams } from 'react-router-dom';
import { productsAPI } from '../../store/products/products.api';

import Page from '../../components/features/page/page.component';

type SearchRouteParams = {
  query: string;
  page: string;
};

const SearchPage = () => {
  const { query } = useParams<keyof SearchRouteParams>() as SearchRouteParams;
  const { page } = useParams<keyof SearchRouteParams>() as SearchRouteParams;
  const limit = 5;

  const { data, isLoading, error } = productsAPI.useFetchSearchQuery({
    page: Number(page),
    limit,
    query,
  });

  return (
    <div>
      <h1>{`Results on '${query}' search`}</h1>

      {!isLoading && data?.total === 0 && <h1>Sorry, nothing was found</h1>}
      <Page
        route={'category'}
        page={page}
        products={data?.products}
        isLoading={isLoading}
        error={Boolean(error)}
        total={data?.total}
        limit={limit}
      />
    </div>
  );
};

export default SearchPage;
