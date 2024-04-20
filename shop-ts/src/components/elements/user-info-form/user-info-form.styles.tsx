import styled from 'styled-components';

export const UserInfoConstainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;

  h2 {
    margin: 10px 0;
  }
`;

export const UserInfoFormElement = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  div {
    margin: 15px 0;
  }
`;

export const ButtonsContainer = styled.div<{ $hidden: boolean }>`
  display: ${({ $hidden }) => ($hidden && 'none') || 'block'};
  width: 50%;

  button {
    width: 100%;
  }
`;
