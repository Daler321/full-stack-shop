import styled from 'styled-components';

import { DivCustomScroll } from '../../features/div-custom-scroll/div-custom-scroll.styles';
import { CardItem } from '../../features/product-item/product-item.styles';

export const PopularItemsContainer = styled(DivCustomScroll)`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  column-gap: 20px;
  padding: 10px 0;

  & ${CardItem} {
    overflow: unset;
    min-width: 20%;

    .btnadd {
      transform: scale(0.7);
      margin: 0;
    }

    @media screen and (max-width: 1050px) {
      min-width: 30%;

      .btnadd {
        /* transform: scale(0.6); */
      }
    }

    @media screen and (max-width: 720px) {
      min-width: 50%;
    }

    @media screen and (max-width: 450px) {
      min-width: 65%;
    }
  }
`;
