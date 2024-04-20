import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../../types/products.api.interface';

import Pagenation from '../../elements/pagenation/pagenation.component';
import ProductItem from '../product-item/product-item.component';

import { ProductsContainer } from './page.styles';

type pageParams = {
  route: string;
  page: string;
  products?: IProduct[];
  error: boolean;
  isLoading: boolean;
  total?: number;
  limit: number;
  name?: string;
  needPopular?: boolean;
};

const Page: FC<pageParams> = ({
  route,
  page,
  products = [],
  isLoading,
  error,
  total = 1,
  limit,
  name = '',
  needPopular = false,
}) => {
  const nav = useNavigate();

  const mostPopular = products.reduce((acc, product, i) => {
    return (product.rating > products[acc].rating && i) || acc;
  }, 0);

  const chosePage = (page: number): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    name ? nav(`/${route}/${name}/${page}`) : nav(`/${route}/${page}`);
  };

  return (
    <div>
      <ProductsContainer>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        {products.map((product, i) => (
          <ProductItem
            key={product.id}
            item={product}
            className={(needPopular && i === mostPopular && 'popular') || ''}
          />
        ))}
      </ProductsContainer>

      <Pagenation
        currentPage={Number(page)}
        itemsQuantity={total}
        chosePage={chosePage}
        limit={limit}
      />
    </div>
  );
};

export default Page;
