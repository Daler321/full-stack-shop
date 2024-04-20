import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemPageContainer = styled.div`
  width: 100%;
  /* margin-top: -10px; */
`;

export const ItemTitle = styled.h1`
  margin-top: 40px;
  padding: 0 10%;
  text-align: center;
`;

export const ItemBrand = styled.h1`
  padding: 0 10%;
  text-align: left;
  font-size: 26px;
`;

export const ItemCategory = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: capitalize;
  font-size: 20px;
  font-style: italic;
  padding: 8px 10%;

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemPriceContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-size: 25px;

  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

export const ItemDiscountPrice = styled.span`
  font-weight: bold;
`;

export const ItemPrice = styled.span`
  font-size: 18px;
  text-decoration: line-through;

  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const ItemDiscount = styled.span`
  color: green;
  font-size: 20px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

export const ItemRatingContainer = styled.div`
  padding: 5px 10%;
  padding-bottom: 15px;
  font-size: 22px;
`;

export const ItemOrders = styled.span`
  font-size: 20px;
  margin-left: 100px;
`;

export const ItemLeft = styled.span`
  display: block;
  width: 80%;
  font-size: 20px;
  text-align: right;
  padding: 10px 8%;
`;

export const ItemDiscribtionContainer = styled.p`
  padding: 0 10%;
  font-size: 20px;
`;

export const ItemBackBtn = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 650px) {
    padding-bottom: 30px;
  }
`;

export const PiceInfoControlElement = styled.div`
  padding: 25px 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsContainer = styled.div`
  padding: 20px 10%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
