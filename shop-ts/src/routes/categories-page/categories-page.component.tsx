import React from 'react';

import { productsAPI } from '../../store/products/products.api';

import CategoryItem from '../../components/features/category-item/category-item.componetn';

import {
  AllCategoriesContainer,
  AllCategoriesTitle,
} from './categories-page.styles';

const CategoriesPage = () => {
  const { data, error, isLoading } = productsAPI.useFetchCategoriesQuery(null);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <AllCategoriesContainer>
      <AllCategoriesTitle>All Categories</AllCategoriesTitle>
      {data?.map((category) => (
        <CategoryItem
          key={category.name}
          title={category.name}
          imageUrl={category.img}
        />
      ))}
    </AllCategoriesContainer>
  );
};

export default CategoriesPage;
