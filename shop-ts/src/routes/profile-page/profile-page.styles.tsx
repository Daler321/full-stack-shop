import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/svg/chevron-right-solid.svg';

export const ChaptersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  margin: 40px 100px;

  @media screen and (max-width: 650px) {
    margin: 30px 30px;
  }
`;

export const Chapter = styled.div`
  width: 100%;
  padding: 30px 20px;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgray;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border-width: 3px;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const ChapterContent = styled.div<{ $hidden: boolean }>`
  display: ${({ $hidden }) => ($hidden && 'none') || 'flex'};
  justify-content: center;
  width: 100%;

  animation: side-slide-down-chapter 0.3s linear 0s both;

  @keyframes side-slide-down-chapter {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

export const Arrow = styled(ArrowIcon)<{ $isRotate: boolean }>`
  width: 30px;
  height: 30px;
  transform: rotate(${({ $isRotate }) => ($isRotate && '90deg') || '0'});
  transition: 300ms;
`;

export const ExitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 50px 0;
`;
