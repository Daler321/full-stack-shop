import styled from 'styled-components';

export const AllCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 30px;

  a {
    height: 240px;
    min-width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AllCategoriesTitle = styled.h1`
  grid-column: 1 / -1;
  text-align: center;
  padding-bottom: 30px;
`;
