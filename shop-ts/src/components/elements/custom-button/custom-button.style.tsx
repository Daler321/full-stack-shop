import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.style';

export const BaseButton = styled.button<{ $color?: string }>`
  color: ${(props) => (props.$color ? props.$color : 'black')};
  cursor: pointer;
  padding: 10px 15px;
  font-size: 15px;
  text-transform: uppercase;
  border: 2px solid ${(props) => (props.$color ? props.$color : 'lightgray')};
  border-radius: 17px;
  background: none;
  font-weight: bold;
  user-select: none;

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.07);
    color: #00000075;

    &:hover {
      filter: none;
    }

    &:active {
      transform: none;
    }
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ActionButton = styled(BaseButton)`
  border-radius: 50%;
  margin: 0 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;

  &:hover {
    filter: brightness(130%);
  }

  @media screen and (max-width: 650px) {
    margin: 0 10px;
    width: 34px;
    height: 34px;
    font-size: 25px;
    max-width: 30px;

    &:active {
      transform: scale(0.75);
    }
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
