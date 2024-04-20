import styled from 'styled-components';

import { ReactComponent as SearchIcon } from '../../../assets/svg/magnifying-glass-solid.svg';

export const SearchInput = styled.input`
  background: grey;
  border: 2px solid darkgray;
  padding: 12px;
  margin-right: 5px;
  width: 40vw;
  border-radius: 10px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #c2c2c2;
  }

  animation: side-slide-left 0.2s linear 0s both;

  @keyframes side-slide-left {
    from {
      transform: translatex(100%);
      width: 0;
    }

    to {
      transform: translatex(0);
      width: 40vw;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 8px;
    width: 30vw;
  }
`;

export const SearchInInput = styled(SearchIcon)`
  z-index: 10;
  margin-left: -40px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    fill: #0000008d;
  }

  &:active {
    fill: #0000008d;
    transform: scale(0.95);
  }

  @media screen and (max-width: 650px) {
    margin-left: -30px;
    width: 20px;
    height: 20px;
  }
`;
