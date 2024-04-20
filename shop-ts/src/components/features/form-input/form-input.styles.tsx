import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -17px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  $shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 10px;
  transition: 300ms ease all;
  ${({ $shrink }) => $shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  width: 90%;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  border-radius: 5px;
  border: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }

  &:disabled {
    color: ${subColor};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 25px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
