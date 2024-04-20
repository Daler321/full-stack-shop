import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 600px) {
    min-width: 90%;
  }
`;

export const PaymentButton = styled(CustomButton)`
  margin-left: auto;
  margin-top: 30px;
`;
