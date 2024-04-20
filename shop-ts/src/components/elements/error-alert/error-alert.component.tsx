import React, { FC } from 'react';

import {
  ErrorAlertContainer,
  ErrorAlertMessage,
  ErrorAlertMessageContainer,
} from './error-alert.styles';

const ErrorAlert: FC<{ currentError: string }> = ({ currentError }) => {
  return (
    <ErrorAlertContainer>
      <ErrorAlertMessageContainer>
        <ErrorAlertMessage>{currentError}</ErrorAlertMessage>
      </ErrorAlertMessageContainer>
    </ErrorAlertContainer>
  );
};

export default ErrorAlert;
