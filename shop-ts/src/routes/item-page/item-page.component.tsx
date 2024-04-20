import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { productsAPI } from '../../store/products/products.api';
import {
  addZeros,
  discoundPrice,
} from '../../utils/helper-functions/helper-functions';

import AddToCartButton from '../../components/features/add-to-cart-button/add-to-cart-button.component';
import ImageSlide from '../../components/features/image-slide/image-slide.component';
import Comment from '../../components/features/comment/comment.component';
import { StarSolidIcon } from '../../components/elements/stars/star.solid';

import {
  ItemPageContainer,
  ItemTitle,
  ItemPriceContainer,
  ItemDiscountPrice,
  ItemPrice,
  ItemDiscount,
  ItemRatingContainer,
  ItemDiscribtionContainer,
  ItemBackBtn,
  PiceInfoControlElement,
  ItemCategory,
  CommentsContainer,
  ItemOrders,
  ItemBrand,
  ItemLeft,
} from './item-page.styles';

type CategoryRouteParams = {
  id: string;
};

const ItemPage = () => {
  const { id } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const itemId = Number(id);
  const nav = useNavigate();

  const { data, error, isLoading } =
    productsAPI.useFetchSingleProductQuery(itemId);

  const item = data?.item;

  return (
    <ItemPageContainer>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <ItemBackBtn onClick={() => nav(-1)}>Back to results</ItemBackBtn>
      <ImageSlide images={item?.images || []} />
      <ItemTitle>{item?.title}</ItemTitle>
      <PiceInfoControlElement>
        <ItemPriceContainer>
          <ItemDiscountPrice>
            $
            {(item?.discountpercentage &&
              discoundPrice(item?.price || 0, item?.discountpercentage || 0)) ||
              item?.price}
          </ItemDiscountPrice>
          {item?.discountpercentage && (
            <>
              <ItemPrice>${item?.price}</ItemPrice>
              <ItemDiscount>-{item?.discountpercentage}%</ItemDiscount>
            </>
          )}
        </ItemPriceContainer>
        <AddToCartButton item={item} />
      </PiceInfoControlElement>
      <ItemLeft>{item?.stock} items left</ItemLeft>
      <ItemRatingContainer>
        <span>
          <StarSolidIcon /> {addZeros(item?.rating || 0)}
        </span>{' '}
        <ItemOrders>{item?.orders} orders</ItemOrders>
      </ItemRatingContainer>
      <ItemBrand>{item?.brand}</ItemBrand>
      <ItemCategory to={`/category/${item?.category}/1`}>
        {item?.category}
      </ItemCategory>
      <ItemDiscribtionContainer>{item?.description}</ItemDiscribtionContainer>
      <CommentsContainer>
        {data?.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </CommentsContainer>
    </ItemPageContainer>
  );
};

export default ItemPage;
