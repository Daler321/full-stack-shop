import styled from 'styled-components';

import { CategoryItemContainer } from '../../components/features/category-item/category-item.styles';

export const HomeConstainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(1fr, 350px);
  gap: 10px;
  padding: 20px;
  align-items: center;
`;

export const HeomeElement = styled.div`
  /* border: 3px solid darkgray; */
  border-radius: 15px;
  padding: 20px;
`;

export const About = styled(HeomeElement)`
  grid-area: 1 / 1 / span 2 / span 3;
`;

export const Categories = styled(HeomeElement)`
  grid-area: 3 / 1 / span 2 / span 2;
  padding: 1px;
`;

export const AllProducts = styled(CategoryItemContainer)`
  grid-area: 3 / 3 / span 2 / span 1;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 15px;
`;

export const PopularProducts = styled(HeomeElement)`
  grid-area: 5 / 1 / span 1 / span 3;
`;

export const Information = styled(HeomeElement)`
  grid-area: 6 / 1 / span 1 / span 3;
`;
