import { ButtonHTMLAttributes, FC } from 'react';

import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
  ActionButton,
} from './custom-button.style';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
  action = 'action',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.action]: ActionButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  color,
  ...otherProps
}) => {
  const Button = getButton(buttonType);
  return (
    <Button disabled={isLoading} {...otherProps} $color={color}>
      {isLoading ? <ButtonSpinner /> : children}
    </Button>
  );
};

export default CustomButton;
