import React, { useEffect, useState } from 'react';

import { productsAPI } from '../../../store/products/products.api';
import { IProduct } from '../../../types/products.api.interface';

import { PopularItemsContainer } from './popularitem.styles';
import ProductItem from '../../features/product-item/product-item.component';

const PopularItems = () => {
  const [popularProducts, setPopularProducrs] = useState<IProduct[]>([]);
  const { data } = productsAPI.useFetchAllProductsQuery(null);

  useEffect(() => {
    if (data) {
      const sortedProducts = [...data?.products].sort(
        (a, b) => b.rating - a.rating
      );
      setPopularProducrs(sortedProducts.slice(0, 15));
    }
  }, [data]);

  return (
    <PopularItemsContainer>
      {data &&
        popularProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
    </PopularItemsContainer>
  );
};

export default PopularItems;
