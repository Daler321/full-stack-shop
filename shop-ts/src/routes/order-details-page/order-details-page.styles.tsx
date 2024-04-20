import styled from 'styled-components';

import { DivCustomScroll } from '../../components/features/div-custom-scroll/div-custom-scroll.styles';
import { ReactComponent as Close } from '../../assets/svg/xmark-solid.svg';

export const OrderDetailsBackground = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    top: 65px;
  }
`;

export const OrderDetailsContainer = styled(DivCustomScroll)`
  cursor: default;
  max-height: 600px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  background: whitesmoke;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 650px) {
    max-height: 500px;
    width: 70%;
  }
`;

export const CloseBtn = styled.div`
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.404);
  display: flex;
  justify-content: space-between;
`;

export const ClodeIcon = styled(Close)`
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 650px) {
    width: 25px;
    height: 25px;
  }
`;

export const OrderDetailsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const OrderDetailsHeaderElement = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const OrderDetailsItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderDetailsDelivered = styled.div`
  width: 100%;
  font-size: 20px;
  padding-top: 20px;
  text-align: left;

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
