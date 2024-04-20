import styled from 'styled-components';

export const ErrorAlertContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    top: 65px;
  }
`;

export const ErrorAlertMessageContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  background: #862727;
`;
export const ErrorAlertMessage = styled.h1`
  color: #e4e3e3;
  font-size: 28px;
`;
