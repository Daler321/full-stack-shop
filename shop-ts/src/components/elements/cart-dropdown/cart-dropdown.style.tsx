import styled from 'styled-components';
import { DivCustomScroll } from '../../features/div-custom-scroll/div-custom-scroll.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: grid;
  grid-template-rows: 4fr 1fr;
  justify-items: center;
  padding: 20px;
  border: 2px solid grey;
  border-top: none;
  border-right: none;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
  border-radius: 0 0 0 10px;

  animation: slide-left 0.2s linear 0s both;

  a {
    margin-top: auto;
  }

  @keyframes slide-left {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 650px) {
    width: 192px;
    height: 272px;
    padding: 10px;
    top: 65px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
`;

export const CartItems = styled(DivCustomScroll)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
