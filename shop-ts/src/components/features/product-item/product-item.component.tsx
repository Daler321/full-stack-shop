import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../../types/products.api.interface';
import {
  addZeros,
  discoundPrice,
} from '../../../utils/helper-functions/helper-functions';

import AddToCartButton from '../add-to-cart-button/add-to-cart-button.component';
import { StarSolidIcon } from '../../elements/stars/star.solid';

import {
  CardImg,
  CardItem,
  ProductTitle,
  RatingContainer,
  PriceContainer,
  Price,
  DicountPrice,
} from './product-item.styles';

interface IProductItemProps {
  item: IProduct;
  className?: string;
}

const ProductItem: FC<IProductItemProps> = ({ item, className }) => {
  const nav = useNavigate();

  return (
    <CardItem className={className} onClick={() => nav(`/product/${item.id}`)}>
      <CardImg src={item.images[0]} alt={item.description} />
      <ProductTitle>{item.title}</ProductTitle>
      <RatingContainer>
        <span>
          <StarSolidIcon />
          {addZeros(item.rating)}
        </span>{' '}
        <span>{item.orders} orders</span>
      </RatingContainer>
      <PriceContainer className='popprice'>
        <Price>
          {item.discountpercentage ? (
            <>
              <DicountPrice>${item.price}</DicountPrice> $
              {discoundPrice(item.price, item.discountpercentage)}
            </>
          ) : (
            <>${item.price}</>
          )}
        </Price>
        <AddToCartButton item={item}>add</AddToCartButton>
      </PriceContainer>
    </CardItem>
  );
};

export default ProductItem;
