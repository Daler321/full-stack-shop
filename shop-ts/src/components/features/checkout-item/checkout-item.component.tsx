import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';

import { ICartItem } from '../../../types/products.api.interface';
import {
  discoundPrice,
  fixRounding,
} from '../../../utils/helper-functions/helper-functions';
import {
  addItemToCart,
  reduceItemInCart,
  removeItemFromCart,
} from '../../../store/cart/cart.slice';

import {
  CheckoutItemContainer,
  ImageContainer,
  Info,
  Quantity,
  Arrow,
  Value,
  RemoveBtn,
  PriceContainer,
  OldPrice,
  NewPrice,
} from './checkout-item.style';
import { Link } from 'react-router-dom';

export type CheckoutItemProps = {
  item: ICartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const { images, title, quantity, price, discountpercentage, stock } = item;
  const dispatch = useDispatch();

  const addProduct = () => {
    if (quantity >= stock) return;
    dispatch(addItemToCart(item));
  };
  const reduceProduct = () => dispatch(reduceItemInCart(item));
  const removeProduct = () => dispatch(removeItemFromCart(item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Link to={`/product/${item.id}`}>
          <img src={images[0]} alt={title} />
        </Link>
      </ImageContainer>
      <Info>{title}</Info>
      <Quantity>
        <Arrow onClick={reduceProduct}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addProduct}>&#10095;</Arrow>
      </Quantity>
      <PriceContainer>
        {(discountpercentage && (
          <>
            <OldPrice>${price * quantity}</OldPrice>
            <NewPrice>
              $
              {fixRounding(
                Number(discoundPrice(price, discountpercentage)) * quantity,
                2
              )}
            </NewPrice>
          </>
        )) || <NewPrice>${price * quantity}</NewPrice>}
      </PriceContainer>
      <RemoveBtn onClick={removeProduct}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
