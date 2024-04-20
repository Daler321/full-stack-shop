import styled from 'styled-components';

export const WriteCommentConstiner = styled.div`
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

export const WriteCommentHeader = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-top: 0;
`;

export const WriteRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const WriteRatinElement = styled.input`
  display: none;
`;

export const WriteCommentText = styled.textarea`
  min-height: 80px;
  width: 90%;
  margin: 20px 0;
  border: 2px solid grey;
  border-radius: 15px;
  padding: 20px 5%;
  resize: none;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: darkgray;
  }
`;

export const WriteCommentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
