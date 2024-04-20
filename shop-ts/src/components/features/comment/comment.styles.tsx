import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid grey;
  border-radius: 10px;
  background: #e9e9e9;
`;

export const CommentHeadr = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-right: 50px;
`;

export const CommentWriter = styled.h1`
  font-size: 22px;
`;

export const CommentData = styled.h1`
  font-size: 18px;
  color: #424242;
`;

export const CommentRating = styled.div`
  padding: 3px 15px;
  font-size: 20px;
`;

export const CommentText = styled.div`
  margin: 15px 0;
  padding: 15px;
  width: 80%;
  font-size: 18px;
  border: 2px solid #bebebe;
  border-radius: 10px;
`;
