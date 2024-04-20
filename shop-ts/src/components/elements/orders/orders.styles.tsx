import styled from 'styled-components';

export const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const OrdersHeader = styled.div`
  border-bottom: 2px solid black;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;

  @media screen and (max-width: 750px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
