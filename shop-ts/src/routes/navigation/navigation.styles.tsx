import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    height: 45px;
  }
`;

export const Title = styled(Link)`
  letter-spacing: 4px;
  text-align: center;
  font-size: 32px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  user-select: none;

  @media screen and (max-width: 650px) {
    letter-spacing: 2px;
    font-size: 24px;
  }
`;

export const MenuBar = styled.div`
  z-index: 10;
  display: inline;
  cursor: pointer;

  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    height: 2px;
    background-color: #000000;
    margin: 8px 0;
    transition: 0.4s;
  }

  &:hover,
  &:active {
    .bar1,
    .bar2,
    .bar3 {
      background-color: #0000008d;
    }
  }

  &.change .bar1 {
    transform: rotate(-45deg) translate(-7px, 8px);
  }

  &.change .bar2 {
    opacity: 0;
  }

  &.change .bar3 {
    transform: rotate(45deg) translate(-6px, -8px);
  }

  @media screen and (max-width: 650px) {
    .bar1,
    .bar2,
    .bar3 {
      width: 22px;
      height: 2px;
      background-color: #000000;
      margin: 5px 0;
      transition: 0.4s;
    }

    &.change .bar1 {
      transform: rotate(-45deg) translate(-5.5px, 5px);
    }

    &.change .bar3 {
      transform: rotate(45deg) translate(-4.5px, -5px);
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 30px;
    height: 30px;
    padding: 10px;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      fill: #0000008d;
    }

    &:active {
      fill: #0000008d;
      transform: scale(0.95);
    }
  }

  @media screen and (max-width: 650px) {
    .icon {
      width: 22px;
      height: 22px;
      padding: 5px;
    }
  }
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: 80px;

  @media screen and (max-width: 650px) {
    margin-top: 65px;
  }
`;
