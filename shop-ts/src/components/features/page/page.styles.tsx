import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  row-gap: 45px;
  column-gap: 2.3%;
  justify-content: center;
  /* max-width: 100%; */
  /* overflow-x: hidden; */

  .popular {
    grid-area: 1 / 1 / 1 / span 2;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: repeat(3, 1fr);

    img {
      width: 90%;
      height: auto;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-row-end: 4;
      margin: auto;
      display: block;
      overflow: hidden;

      transform: none;
    }

    h1 {
      max-height: 100%;
    }

    .popprice {
      position: unset;
      display: flex;
      flex-direction: column;
      padding: 5px;
      align-items: center;

      span {
        font-size: 20px;
      }

      .btnadd {
        /* width: 100%; */
      }
    }
  }

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(3, 30%);
    column-gap: 2.5%;
    row-gap: 30px;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 45%);
    column-gap: 3%;
    row-gap: 20px;
  }

  @media screen and (max-width: 650px) {
    .btnadd {
      margin: 0;
    }
  }
`;
