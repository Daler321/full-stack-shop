import React, { FC, HTMLAttributes } from 'react';

import {
  CategoryItemContainer,
  CategoryBodyConteiner,
  BackgroundImage,
} from './category-item.styles';

export type CategoryItemProps = {
  title: string;
  imageUrl: string;
  toCategory?: boolean;
} & HTMLAttributes<HTMLAnchorElement>;

const CategoryItem: FC<CategoryItemProps> = ({
  title,
  imageUrl,
  toCategory = false,
  ...otherProps
}) => {
  return (
    <CategoryItemContainer
      to={(!toCategory && `/category/${title}/1`) || '/category'}
      {...otherProps}
    >
      <BackgroundImage $imageUrl={imageUrl} />
      <CategoryBodyConteiner>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyConteiner>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
