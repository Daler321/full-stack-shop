import React from 'react';

import { productsAPI } from '../../../store/products/products.api';

import { LastElement, TwitContainerInner } from './category-constainer.styles';
import CategoryItem from '../../features/category-item/category-item.componetn';

const CategoryContainer = () => {
  const { data } = productsAPI.useFetchCategoriesQuery(null);

  return (
    <TwitContainerInner>
      <CategoryItem
        title='More'
        imageUrl='https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-excited-1593184777.jpg?crop=1xw:1xh;center,top&resize=980:*'
        toCategory={true}
        style={LastElement}
      />
      {data?.map((category) => (
        <CategoryItem
          key={category.name}
          title={category.name}
          imageUrl={category.img}
        />
      ))}
    </TwitContainerInner>
  );
};

export default CategoryContainer;
