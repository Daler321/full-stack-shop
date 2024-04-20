import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.style';

const Spinner = () => {
  return (
    <SpinnerOverlay data-testid="spinner">
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
