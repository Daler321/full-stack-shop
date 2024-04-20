import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.span`
  width: 23%;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const PriceContainer = styled.span`
  width: 23%;
  display: flex;
  flex-direction: column;
`;

export const OldPrice = styled.span`
  font-size: 15px;
  text-decoration: line-through;
`;

export const NewPrice = styled.span`
  font-size: 20px;
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Value = styled.div`
  margin: 0 10px;
`;

export const RemoveBtn = styled.div`
  cursor: pointer;
  padding-left: 12px;
`;
