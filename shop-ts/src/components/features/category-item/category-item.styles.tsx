import styled from 'styled-components';
import { Link } from 'react-router-dom';

type BackgroundImageProps = {
  $imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
`;

export const CategoryBodyConteiner = styled.div`
  max-width: 100%;
  height: 110px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    text-align: center;
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 20px;
    text-transform: uppercase;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 15px;
  }
`;

export const CategoryItemContainer = styled(Link)`
  position: relative;
  color: black;
  min-width: 10%;
  height: 140px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${CategoryBodyConteiner} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;
