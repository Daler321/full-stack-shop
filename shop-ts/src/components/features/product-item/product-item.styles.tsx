import styled from 'styled-components';

export const CardItem = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border: 4px solid lightgray;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    border-color: #a5a5a5;
  }
`;

export const CardImg = styled.img`
  height: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const ProductTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  padding: 5px 0;
  padding-left: 5px;
  max-height: 60px;
  overflow: hidden;
`;

export const RatingContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px;

  @media screen and (max-width: 650px) {
    gap: 10px;
    padding: 5px 0;
  }
`;

export const PriceContainer = styled.div`
  padding: 5px 10px;
  position: absolute;
  bottom: 0;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  gap: 20px;

  .addbutton {
    /* width: 20%; */
  }

  @media screen and (max-width: 650px) {
    gap: 5px;

    .btnadd {
      transform: scale(0.7);
    }
  }
`;

export const Price = styled.span`
  font-size: 20px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const DicountPrice = styled.span`
  font-size: 16px;
  text-decoration: line-through;
`;
