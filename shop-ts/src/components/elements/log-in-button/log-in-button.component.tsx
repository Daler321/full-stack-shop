import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

const LogInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 80%;
  padding: 40px;

  h2 {
    font-size: 26px;
  }

  button {
    width: 50%;
    transform: scale(1.3);
  }
`;

const LogInButton = () => {
  const nav = useNavigate();

  return (
    <LogInButtonContainer>
      <h2>For order you should be loged in</h2>
      <CustomButton onClick={() => nav('/login')}>Log In</CustomButton>
    </LogInButtonContainer>
  );
};

export default LogInButton;
