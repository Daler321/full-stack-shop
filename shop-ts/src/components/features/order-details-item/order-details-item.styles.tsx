import styled from 'styled-components';

export const OrderDetailsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: 650px) {
    align-items: flex-end;
  }
`;

export const OrderDetailsItemImgWithTitleContainer = styled.div`
  width: 20%;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export const OrderDetailsItemImg = styled.img`
  height: 90px;
  overflow: hidden;

  @media screen and (max-width: 650px) {
    height: 75px;
  }
`;

export const OrderDetailsItemTitleContainer = styled.h2`
  font-size: 18px;
  text-align: left;

  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

export const OrderDetailsItemElement = styled.div`
  width: 15%;

  @media screen and (max-width: 650px) {
    width: auto;
  }
`;

export const OrderDetailsItemReview = styled.div`
  cursor: pointer;
  text-decoration: underline;

  &:active {
    transform: scale(0.9);
  }
`;

export const OrderDetailsItemWithCommentContainer = styled.div`
  border-bottom: 3px solid black;
`;
