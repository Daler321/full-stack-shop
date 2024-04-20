import styled from 'styled-components';
import { DivCustomScroll } from '../../features/div-custom-scroll/div-custom-scroll.styles';

export const SideBarContainer = styled(DivCustomScroll)`
  z-index: 100;
  position: absolute;
  top: 80px;
  left: 0;
  width: 40%;
  max-width: 360px;
  min-width: 220px;
  max-height: 60vh;
  background: #a8a8a8;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 10px;
  padding-bottom: 5px;
  border-radius: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  animation: slide-in 0.2s linear 0s both;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 650px) {
    top: 65px;
  }
`;

export const BaseSideElement = styled.div`
  text-align: left;
  font-size: 20px;
  padding: 8px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }
`;

export const SideElementWithChildren = styled(BaseSideElement)`
  overflow-y: hidden;
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -moz-transform-origin: 0 0;

  .active {
    transform: scaleY(-1);
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
  }
`;

export const SideElementChildrenContainer = styled.div`
  /* font-size: 22px; */
  animation: side-slide-down 0.4s linear 0s both;

  @keyframes side-slide-down {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0);
    }
  }

  &:hover {
    margin-bottom: 30px;
  }
`;

export const SideBarArrow = styled.span`
  transition: 400ms;
  display: inline-block;
  font-size: 16px;
  padding: 0 10px;
  pointer-events: none;
`;

export const SideBarChildrenElement = styled(BaseSideElement)`
  font-size: 15px;
`;
