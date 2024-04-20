import styled from 'styled-components';

export const TwitContainerInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto auto;
  grid-auto-rows: 0px;
  position: relative;
  overflow: hidden;
`;

export const LastElement = {
  gridRowEnd: '-1',
  gridColumnEnd: '-1',
};
