import styled from 'styled-components';

export const OrderContainder = styled.div`
  border: 2px solid lightgrey;
  border-radius: 15px;
  padding: 30px 15px;
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

export const OrderInfo = styled.div`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:active {
    transform: scale(0.96);
  }
`;
