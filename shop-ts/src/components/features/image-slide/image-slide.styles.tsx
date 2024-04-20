import styled from 'styled-components';

export const ItemImgContainer = styled.div`
  height: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media screen and (max-width: 650px) {
    height: 300px;
    padding: 10px;
  }
`;

export const ItemImgConstrolContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ItemImgControlBtn = styled.span<{ $left?: boolean }>`
  position: absolute;
  color: rgba(0, 0, 0, 0.2);
  font-size: 100px;
  cursor: pointer;
  user-select: none;
  width: 400px;

  &:hover {
    color: grey;
  }

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 900px) {
    width: 300px;
  }

  @media screen and (max-width: 650px) {
    width: 150px;
    font-size: 70px;
  }

  ${({ $left }) =>
    $left
      ? `
    left: 0;
    // padding-left: 100px;
  `
      : `
      right: 0;
      // padding-right: -300px;
      text-align: end;
  `}
`;

export const ItemImg = styled.img`
  max-width: 100%;
  max-height: 450px;

  @media screen and (max-width: 650px) {
    max-height: 350px;
  }
`;

export const ImgSelectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
`;

export const ImgSelector = styled.span<{ $selected?: boolean }>`
  background: lightgray;
  padding: 8px;
  width: 0;
  border-radius: 50%;
  transition: 500ms;

  ${({ $selected }) =>
    $selected &&
    `
    width: 20px;
    border-radius: 20px;
    background: #a7a7a7;
  `}
`;
