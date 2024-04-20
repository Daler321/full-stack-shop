import styled from 'styled-components';

export const CommentWithItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const CommentContainer = styled.div`
  width: 70%;

  @media screen and (max-width: 650px) {
    transform: scale(0.8);
  }
`;
