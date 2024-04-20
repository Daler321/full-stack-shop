import styled from 'styled-components';

import CustomButton from '../../elements/custom-button/custom-button.component';

export const ConstrolItemContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 25px;
`;

export const AddBtn = styled(CustomButton)`
  width: 150px;
  height: 50px;
  font-size: 20px;

  @media screen and (max-width: 650px) {
    width: 100px;
    height: 40px;
    font-size: 18px;
  }
`;
