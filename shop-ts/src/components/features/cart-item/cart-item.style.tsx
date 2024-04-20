import styled from 'styled-components';

export const CartItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 15px;
  user-select: none;

  img {
    width: 30%;
  }

  @media screen and (max-width: 650px) {
    img {
      width: 35%;
    }
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10px;

  @media screen and (max-width: 650px) {
    padding: 0 5px;
    font-size: 14px;
  }
`;

export const NameContainer = styled.span`
  font-size: 16px;
  overflow: hidden;

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

export const AdditionalControl = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  border-radius: 5px;

  animation: slide-left 0.2s linear 0s both;
`;

export const QuantityControl = styled.div`
  color: white;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteBtn = styled.button`
  border: none;
  background: #ff000099;
  height: 100%;
  width: 20%;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;

  &:hover {
    background: red;
  }
`;
